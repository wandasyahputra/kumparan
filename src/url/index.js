import config from 'config.js'

const baseUrl = config.apis.restapi.url

// USERS
export const FETCH_USERS = `${baseUrl}users`;

// POSTS
export const ADD_POST = `${baseUrl}posts`
export const UPDATE_POST = id => `${baseUrl}posts/${id}`
export const DELETE_POST = id => `${baseUrl}posts/${id}`
export const FETCH_POSTS_DETAIL= id => `${baseUrl}posts?id=${id}`
export const FETCH_POSTS_USER = id => `${baseUrl}posts?userId=${id}`
export const FETCH_POSTS_COMMENT = id => `${baseUrl}comments?postId=${id}`


// ALBUMS
export const FETCH_ALBUMS_USER = id => `${baseUrl}albums?userId=${id}`
export const FETCH_ALBUMS_PHOTO = id => `${baseUrl}photos?albumId=${id}`

// COMMENTS
export const ADD_COMMENT = `${baseUrl}comments`
export const UPDATE_COMMENT = id => `${baseUrl}comments/${id}`
export const DELETE_COMMENT = id => `${baseUrl}comments/${id}`
