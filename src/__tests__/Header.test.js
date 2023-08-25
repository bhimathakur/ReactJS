import { fireEvent, screen, render, waitFor } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux";
import { store } from "../utilities/store";
import { BrowserRouter } from "react-router-dom";
import { SEARCH_SUGGESTIONS, SEARCH_SUGGESTIONS_ARR } from "../mocks/data";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(SEARCH_SUGGESTIONS);
        },
    })
})


test("Logo should be dispaly when header render", () => {
const header = render(
<Provider  store={store}>
    <BrowserRouter >
<Header />
</BrowserRouter>
</Provider>
);
const logo = header.getByTestId("logo");
expect(logo.src).toBe("http://localhost/dummy.png");

 })

test("User profile icon should be dispaly when header render", () => {
    const header = render(
    <Provider  store={store}>
        <BrowserRouter >
    <Header />
    </BrowserRouter>
    </Provider>
    );
    
    const userProfileIcon = header.getByTestId("user-icon");
    expect(userProfileIcon.src).toBe("https://cdn-icons-png.flaticon.com/512/149/149071.png");
    
    })


    test("show search suggestions", async() => {
        const header = render(
            <Provider  store={store}>
                <BrowserRouter >
            <Header />
            </BrowserRouter>
            </Provider>
            );
    
         const searchBtn = header.getByTestId('search-btn');
         const searchInput = header.getByTestId('search-input');   
         fireEvent.change(searchInput, {
            target: {value: 'himachali songs'}
         })
         fireEvent.focusIn(searchInput);
    
        await waitFor(() => expect(screen.getByTestId("search-suggestions")));
        expect(searchInput.value).toBe('himachali songs');
         const searchSuggestions = header.getByTestId("search-suggestions");
         //Mocked data not working as expected need to debugg.
       expect(searchSuggestions.children.length).toBe(1);
    
    })