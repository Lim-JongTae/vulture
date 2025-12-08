<template>
  <div>   
    <blog-cover-preview v-show="cardStore.blogPhotoPreview" />  
    <LoadingView v-show="loading" />
    <div class="create-post">
      <div class="container">
        <div :class="{ invisible: !error }" class="err-message">
          <p><span>{{ errorMsg }}</span></p>
          </div>
          <div class="blog-info">
            <UInput variant="ghost" 
              class="input h-16" 
              type="text" 
              autofocus 
              placeholder="블로그 제목을 입력하세요" 
              v-model="blogTitle"
            />         
            <div class="flex justify-start items-center">
              <div class="upload-file">
                <label for="blog-photo" class="-ml-40 -mb-9">사진선택</label>
                <input 
                  variant="ghost"    
                  class="input"                
                  type="file"                  
                  accept=".png, .jpg, .jpeg"                 
                  id="blog-photo" 
                  icon="i-heroicons-paper-clip-solid"
                  @change="fileChange"
                />
            </div>
            <div class=" mr-36 relative -mb-4">
              <UButton
                id="dis"
                icon="i-heroicons-eye" 
                class="preview button" 
                disabled = disabled
                :class="buttonClass"
                @click="openPreview"
              >
              사진 미리보기
              </UButton>                          
              <div class="file-selector" v-show="cardStore.blogPhotoName">
                <div>파일 명:</div>
                <div class="text-align">{{ cardStore.blogPhotoName }}</div>
              </div>
            </div>
            </div>          
          </div>
        <ClientOnly>
          <QuillEditor 
            :options="options" 
            v-model:content="blogHTML"             
            content-type="html"
            @image-added="imageHandle"
          />      
        </ClientOnly>
      </div>
      <div class="blog-actions flex justify-center">
        <UButton @click="uploadBlog" class="button">블로그 등록</UButton>
        <!-- <NuxtLink class="link-button" to="/views/blogPreview"><UButton class="mt-8">미리보기</UButton></NuxtLink> -->
      </div>
     </div>
    <div>      
    </div>
  </div>
 
  </template>

<script setup>  
  definePageMeta({
  layout: 'create-layout'
}) 
  import { QuillEditor } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css';  
  import { storeToRefs } from 'pinia';
  import { uploadBytes, ref as ref1, getDownloadURL,  } from "firebase/storage";
  import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ];

  const options = ref({
    modules: {
      toolbar: toolbarOptions
    },        
    readOnly: false,
    theme:'snow',  
  })
  // import Quill from "quill"
  // window.Quill = Quill
  // const ImageResize = require("quill-image-resize-module").default
  // Quill.register('modules/imageResize', ImageResize)
  // import Quill from 'quill'
  // import 'quill/dist/quill.core.css'
  // import 'quill/dist/quill.snow.css'  
  const router = useRouter()
  const postStore = usePostStore()   
  const userStore = useUsersStore()  
  const cardStore = useGetCardStore()
  const { blogPhotoName } = storeToRefs(postStore)  
  const dataDocs = ref[null]
  const body = ref("")
  const downloadURL = ref(null)
  const error = ref(null) 
  const errorMsg = ref(null)     
  const file = ref(null)  
  const toast = useToast()
  const loading = ref(false)

  const buttonClass = computed(() => {
    return {'button-inactive': !cardStore.blogPhotoFileURL}
  })
  const imageHandle = (file, Editor, cursorLocation, resetUploader) => {
    console.log('imageHandel')
    const { $storage } = useNuxtApp()    
    const docRef = ref1($storage, `documents/BlogCoverPhotos/${file.name}`)
    // console.log('docrefimgeHandle',docRef)
    uploadBytes(docRef, file).then((snapshot) => {          
          console.log('snapshot',snapshot)                                     
      },      
    (error) => {
      console.log(error)
    }, async ()=> {
      const downloadURL = await docRef.getDownloadURL()
      Editor.insertEmbed(cursorLocation, 'image', downloadURL)
      resetUploader()
    }
    )
  }
   const uploadBlog = async ()=> {        
    const { $storage, $db } = useNuxtApp()
    if (blogTitle.value.length !== 0 && blogHTML.value.length !== 0) {  
      loading.value = true          
      if (file.value)  {        
        const docRef = ref1($storage, `documents/BlogCoverPhotos/${postStore.blogPhotoName}`)        
        console.log('docref',docRef)
        try {     
          const snapshot = await uploadBytes(docRef, file.value)
          // console.log('snapshot',snapshot)
          const downloadURL = await getDownloadURL(snapshot.ref) 
          const timestamp = Date.now()
          const dataBase = doc(collection($db, 'blogPosts'))
          // console.log('dataBase',dataBase)          
          await setDoc(dataBase, {
            blogID: dataBase.id,            
            blogHTML: blogHTML.value,
            blogCoverPhoto: downloadURL,
            blogCoverPhotoName: blogCoverPhotoName.value,
            blogTitle: blogTitle.value,
            profileId: pId.value,
            date: timestamp 
          })                 
          // console.log('documebnt', dataBase)    
          await cardStore.getPost()
          loading.value = false          
          toast.add({
            title: "블로그 등록 성공",
            color: "green",
            background: "green",
            timeout: 2500,
            callback: () => {
              navigateTo('/views/blogs') 
            }
          })   
          reloadNuxtApp({
            path: "/views/blogs",
            persistState: true
          })
          return
        } catch (error) {
          console.log('dbError',error)
          loading.value = false
        }                             
      }      
      error.value = true
      errorMsg.value = "업로드할 사진을 입력해 주세요!"
      setTimeout(() => {
        error.value = false
      }, 4000)
      return        
      }
      error.value = true
      toast.add({
        title: "블로그 제목과 내용을 입력하세요",
        color: "red",
        background: "red",
        timeout: 2500,  
      })
    return
    }   
  const openPreview = () => {
    cardStore.openPhotoPreview()
  }
  const pId = computed (() => {
    return userStore.pId
  })
  const blogCoverPhotoName = computed (() => {
    return cardStore.blogPhotoName
  })
  const blogTitle = computed({
    get() {
      return cardStore.blogTitle      
    },
    set(blogTitle) {
      cardStore.updateBlogTitle(blogTitle)
    }    
  })
  
  const blogHTML = computed({
    get() {
      return cardStore.blogHTML
    },
    set(value) {
      cardStore.newBlogPost(value)
    }
  })  
  const fileChange = (event) => {         
    file.value = event.target.files[0]            
    cardStore.fileNameChange(file.value.name) 
    cardStore.createFileURL(URL.createObjectURL(file.value))    
  }
  onMounted(() => {
    const getDis = document.getElementById('dis')
    getDis.removeAttribute('disabled')   
  })
 
 
</script>

<style scoped>
/* edit size */
.create-post {
  position: relative;
  min-height: 400px;
  height:100%;
}
.create-post button {
  margin-top: 0
}
.link-button {
  text-decoration: none;
  color: #fff; 
}
label {
  transition: 500ms ease-in-out all;
  align-self: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  padding: 12px 24px;
  color: #fff;
  background-color: green;
  text-decoration: none;
}
button, .link-button  {
  transition: 500ms ease-in-out all;
  align-self: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  padding: 12px 24px;
  color: #fff;
  text-decoration: none;
}
.container {
  position: relative;
  height: 100%;
  padding: 10px 25px 60px;
}
.invisible {
  opacity: 0 !important;  
}
.err-message {
  width: 100%;
  padding: 12xp;
  font-weight: 600;
  border-radius: 8px;  
  margin-top: 10px;
  color: rgb(232, 133, 133);
  margin-bottom: 10px;
  background-color: #303030;
  opacity: 1;
  transition: 0.5s easy all;
}
p {
  font-size: 14px;  
}
.blog-info span {
  font-weight: 500;
  font-size: 13px;
  color: black;
}
.file-selector {
  position: absolute;
  top: 0;
  left: 70%;
  color: black;
}
.text-align {
  display: grid;
  grid-template-columns: minmax(300px,max-content) 1fr; 
}

.blog-info {
  display: flex;
  justify-content: space-around;
  margin-bottom: 32px;  
}
.blog-info .input:nth-child(1) {
  min-width: 300px;
  margin-right: auto;
}
.input {
  transition: 0.5s ease-in-out all;
  padding: 10px 40px;
  border: none;
  border-bottom: 1px solid #303030;
 
}
.input:focus {
  outline: none;
  box-shadow: 0 1px 0  0#303030;
}
.upload-file {
  flex: 1;
  position: relative;
  display: flex;
  margin-bottom: 18px;
  
  
}
/* 선택 파일 명 */
.upload-file .input {
  display: none;
}
.preview {
  margin-right: 150px;  
  text-transform: initial;
}
.upload-file span {
  font-size: 12px;
  margin-left: 16px;
  align-self: center;
}
.blog-actions {
  margin-top : 20px;
  margin-left: 22px;
  margin-bottom: 50px;
}

</style>