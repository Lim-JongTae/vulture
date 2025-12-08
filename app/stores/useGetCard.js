import { defineStore } from 'pinia'
import { collection, getDocs, doc, query, orderBy, deleteDoc, limit, startAfter, getDoc } from "firebase/firestore";

export const useGetCardStore = defineStore('cardStore', () => {
  const blogPosts= ref([])
  const blogHTML= ref('문장을 입력하세요.')
  const postLoaded= ref(false)
  const blogTitle= ref('')
  const blogPhotoName= ref('')
  const blogPhotoFileURL= ref(null)
  const blogPhotoPreview= ref(null)    
  const editPost= ref(null)  
  const blogID = ref(null)  
  let lastVisible = ref(null)
  let userCount = ref(0)

  function filterBlogPost(id) {
    blogPosts.value = blogPosts.value.filter((post) => post.blogID !== id)
  }
  const updatePost = async (payload) => {
    filterBlogPost(payload)
    await getPost()
  }
  const getPost = async () => {
    const { $db } = useNuxtApp();
    try {               
      const first = query(collection($db, "blogPosts"),orderBy("date", "desc"), limit(4));            
      const documentSnapshots = await getDocs(first);  
      
      lastVisible.value = documentSnapshots.docs[documentSnapshots.docs.length - 1];
      // console.log("last first", lastVisible.value);      
      const dbResults = documentSnapshots;  // Fetch more documents as needed
      
      dbResults.forEach((doc) => {        
        if (!blogPosts.value.some((post) => post.blogID === doc.id)) {          
          const data = {
            blogID: doc.id,  // Use doc.id for the document ID
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
            blogPhotoFileURL: doc.data().blogCoverPhoto,
          };          
          blogPosts.value.push(data);                           
        }
      });  
      
      postLoaded.value = true;
      // console.log('Final blogPosts:', blogPosts.value);
    } 
    catch (error) {
      console.log("Error fetching posts:", error);
    }
  }
  const getNext = async () => {
    const { $db } = useNuxtApp();
    try {      
      const next = query(collection($db, "blogPosts"),
        orderBy("date", "desc"),
        startAfter(lastVisible.value),
        limit(4));
        const dbResults = await getDocs(next);  // Fetch more documents as needed
        // console.log("last next", lastVisible.value);  
      dbResults.forEach((doc) => {        
        if (!blogPosts.value.some((post) => post.blogID === doc.id)) {          
          const data = {
            blogID: doc.id,  // Use doc.id for the document ID
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
            blogPhotoFileURL: doc.data().blogCoverPhoto,
          };          
          blogPosts.value.push(data);         
        }
      });  
      lastVisible.value = dbResults.docs[dbResults.docs.length - 1];                 
      
      postLoaded.value = true;
      // console.log('Final blogPosts:', blogPosts.value);
    } 
    catch (error) {
      console.log("Error fetching posts:", error);
    }
  }
  
  // const blogPostsCards = computed(() => {
  //   return blogPosts.value.slice(0, blogPosts.value.length)
  // })
  const toggleEditPost = (payload) => {
    editPost.value = payload
  }
  const deletePost = async (id) => {
    const { $storage, $db } = useNuxtApp()    
    const docRef = doc($db, 'blogPosts', id) 
    await deleteDoc(docRef)
    filterBlogPost(id)
  }
  const setBlogState = (payload) => {    
    blogTitle.value = payload.blogTitle,
    blogHTML.value = payload.blogHTML,
    blogPhotoFileURL.value = payload.blogCoverPhoto,
    blogPhotoName.value = payload.blogCoverPhotoName
  }
  function updateBlogTitle(payload) {
    blogTitle.value = payload
  }
  function newBlogPost(body) {
    blogHTML.value = body       
  }
  function fileNameChange(payload) {
    blogPhotoName.value = payload    
  }
  function createFileURL(payload) {
    blogPhotoFileURL.value = payload
    // console.log('file url',this.blogPhotoFileURL)
  }
  function openPhotoPreview() {
    blogPhotoPreview.value = !this.blogPhotoPreview
  }
  function getOnePost(id) {
    // console.log('id', id)
    return blogPosts.value.filter((post) => post.blogID === id)
  }  

  async function fetchUserCount() {
  const { $db } = useNuxtApp();
  try {
    const userCountDoc = await getDoc(doc($db, 'metrics', 'userCount'));
    if (userCountDoc.exists()) {
      userCount.value = userCountDoc.data().count;
    } else {
      userCount.value = 0;
    }
  } catch (error) {
    console.error('회원 수 조회 오류:', error);
  }      
}

  return { 
    getPost,   
    blogID,  
    postLoaded, 
    blogPosts, 
    blogHTML,      
    blogTitle, 
    blogPhotoFileURL,    
    blogPhotoName, 
    editPost,    
    blogPhotoPreview,
    userCount,
    // blogPostsCards,
    toggleEditPost,
    filterBlogPost,
    deletePost,
    setBlogState,
    updateBlogTitle,
    newBlogPost,
    fileNameChange,
    createFileURL,
    openPhotoPreview,
    updatePost,
    getOnePost,
    getNext,    
    fetchUserCount
  }
})

