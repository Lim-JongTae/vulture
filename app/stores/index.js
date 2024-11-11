// import Vuex from 'vuex';

// const store = () => new Vuex.Store({
export const state = () => ({  
    sampleBlogCards: [
      { blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: '2024/07/01'},
      { blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: '2024/08/01'},
      { blogTitle: 'Blog Card #3', blogCoverPhoto: 'stock-3', blogDate: '2024/09/01'},
      { blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-4', blogDate: '2024/10/01'},
    ],
    editPost: 'false',
    user: null,
    profileAdmin: null,
    profileEmail: null,    
    profileUsername: null,
    profileId: null,
    profileInitials: null    
   
});
export const mutations = {

};
export const action = {};