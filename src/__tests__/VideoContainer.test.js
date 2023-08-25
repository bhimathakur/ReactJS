import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import VideoContainer from "../components/VideoContainer";
import {YOUTUBE_VIDEO_DUMMY_LIST } from "../config";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import { store } from "../utilities/store";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(YOUTUBE_VIDEO_DUMMY_LIST);
        },
    })
})

test("Video should be load", async() => {
    const videoContainer = render(<Provider  store={store}>
    <BrowserRouter >
<VideoContainer />
</BrowserRouter>
</Provider>);
    await waitFor(() => expect(screen.getByTestId("video-list"))); 
   const videolist = videoContainer.getByTestId("video-list");
   expect(videolist.children.length).toBe(50);
})
