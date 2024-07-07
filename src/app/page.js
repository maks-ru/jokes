'use client'
import {Provider} from "react-redux";
import Search from "@/components/Search";
import store from "@/store/store";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <Provider store={store}>
        <div>
          <Search/>
        </div>
      </Provider>
    </main>
  );
}
