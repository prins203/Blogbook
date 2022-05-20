import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

// reducers
const blogReducer = (state, action) => {
  switch (action.type) {
    case "getBlogPosts":
      return action.payload;
    case "editBlogPost":
      return state.map((blogPost) => {
        return (blogPost.id === action.payload.id) 
          ? action.payload
          : blogPost
      })
    case "removeBlogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

// actions
const getBlogPosts = (dispatch) => {
  return async () => {
    const res = await jsonServer.get('/blogPosts');

    dispatch({type: 'getBlogPosts', payload: res.data});
  }
}

const addBlogPost = (dispatch) => {
  return async (title, content, navigationCallback) => {
    await jsonServer.post('/blogPosts', {title, content});

    navigationCallback?.navigationCallback();
  };
};

const removeBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogPosts/${id}`);

    dispatch({type: 'removeBlogPost', payload: id});
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, navigationCallback) => {
    await jsonServer.put(`/blogPosts/${id}`, {title,content});

    dispatch({
      type: "editBlogPost",
      payload: {
        id,
        title,
        content,
      },
    });
    navigationCallback?.navigationCallback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, editBlogPost, getBlogPosts },
  []
);
