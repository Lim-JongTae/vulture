import { defineStore } from 'pinia'
import { addDoc, collection, getDocs, doc, query, orderBy, deleteDoc, getDoc } from "firebase/firestore";

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

  function filterBlogPost(id) {
    blogPosts.value = blogPosts.value.filter((post) => post.blogID !== id)
  }

  const getPost = async () => {
    const { $db } = useNuxtApp();
    try {               
      const q = query(collection($db, 'blogPosts'),orderBy('date', 'desc'));      
      const dbResults = await getDocs(q);
      
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
      console.log('Final blogPosts:', blogPosts.value);
    } 
    catch (error) {
      console.log("Error fetching posts:", error);
    }
  }
  const blogPostsCards = computed(() => {
    return blogPosts.value.slice(0, blogPosts.value.length)
  })
  const toggleEditPost = (payload) =>   {
    editPost.value = payload
  }
  const deletePost = async (id) => {
    const { $storage, $db } = useNuxtApp()    
    const docRef = doc($db, 'blogPosts', id) 
    await deleteDoc(docRef)
    filterBlogPost(id)
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
    blogPostsCards,
    toggleEditPost,
    filterBlogPost,
    deletePost
  }
})

