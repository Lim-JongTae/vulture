import { defineStore } from "pinia";
import { addDoc, collection, getDocs, doc, query, orderBy } from "firebase/firestore";

// import { useFirebaseUser } from "~/composables/useState";


export const usePostStore = defineStore('postStore', {
  state: () => ({   
     
    welcomeScreen: {      
      title: 'Welcome!',
      blogPost:'울산독수리의 힘찬 비상~~ 천연기념물 제234호\n 환경부지정 멸종위기 2급' ,      
      photo: 'nn',
      welcomeScreen: true
    },
     sampleBlogPost: [
      {
        id: '1',
        title: "독수리의 급강하 착지",
        blogHTML: "무리들의 먹이활동에 늦은 독수리,<br> 독수리식당에 급하게 착륙하고 있음 ",
        blogCoverPhoto: "down2"
      },
      {
        id: '2',
        title: "66번 대박이 방사",
        blogHTML: "탈진, 농약 중독으로 치료후 방사",
        blogCoverPhoto: "out"
      },
      {
        id: '3',
        title: "'KM' tag",
        blogHTML: "까치, 까마귀의 텃새에 둘러쌓여있는 독수리,<br> 때로는 공격당하기도 합니다.",
        blogCoverPhoto: "km"
      },
      {
        id: '4',
        title: "공격당하는 독수리",
        blogHTML: "텃새인 큰부리까마귀와 까치 무리에게 공격당하는 독수리",
        blogCoverPhoto: "221216"
      },
      {
        id: '5',
        title: "'MN' tag 독수리",
        blogHTML: "독수리식당의 주변을 돌면서 비행하는 독수리",
        blogCoverPhoto: "mn_5000"
      },
      {
        id: '6',
        title: "이크나크 자연보호구",
        blogHTML: "몽골의 주요 조류 서식지로서 국내에서 월동하는 <br>많은 독수리가 이곳에서 서식하고 있음.",
        blogCoverPhoto: "ikhnart"
      },
      {
        id: '7',
        title: "독수리 이동경로",
        blogHTML: "GPS 위성추적경로<br> 몽골 이크나크 자연보호구 도착 ",
        blogCoverPhoto: "path"
      },
      {
        id: '8',
        title: "독수리 심포지움",
        blogHTML: "한반도 독수리 보전을 위한 네트워크 구축<br>울산, 철원, 파주, 경남 고성, 김해",
        blogCoverPhoto: "metting"
      },
    ],
    items : [
      'blogCards/stock-1.jpg',
      'blogCards/stock-2.jpg',
      'blogCards/stock-3.jpg',
      // '/movie/fly.mp4',
      // '/movie/food_1.mp4',
      // '/movie/food_2.mp4',
      // '/movie/food_3.mp4' 
         
    ]  
   }
),
actions: {  
  // fectching
  
  async fetchUsers() {
    const { $db, $auth } = useNuxtApp()
    const firebaseUser = useFirebaseUser()
    // const dataBase = await $db.collection('Users').doc($auth.currentUser.uid )
    // const dbResults = await dataBase.get()
    // return dbResults
    const dateBase = await $db.collection('Users').where('userId', '==', $auth.currentUser.uid)
    const dbResults = await dateBase.get()
    const token = await user.getIdTokenResult()
    const admin = await token.claims.admin
    console.log('store',dbResults)
    // this.profileId = currUser;
    profileEmail = doc.data().email;
    profileUsername = doc.data().username,    
    profileInitials = state.profileUsername
  },
  
  getOnePost (index) {
    return this.sampleBlogPost[index]
  }
},
getters: { 
  text() {
    return this.profileId
  },  


},

})
  

