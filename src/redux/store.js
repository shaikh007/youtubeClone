import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authReducer } from './reducers/auth.reducer'
import {
    homeVideoReducer,
    searchedVideosReducer,
    channelVideosReducer,
    subscriptionsChannelReducer,
} from './reducers/videos.reducer'
import { selectedVideoReducer } from './reducers/videos.reducer'
import { channelDetailsReducer } from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideoReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentList: commentListReducer,
    searchedVideos: searchedVideosReducer,
    channelVideos: channelVideosReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
})

const store = createStore(
    rootReducer, {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store