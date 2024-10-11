import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Counter } from "~/components/counter/counter";
import client from "../../tina/__generated__/client";

export const usePostData = routeLoader$(async () => {
  const results = await client.queries.post({
    relativePath: "hello-world.mdx",
  });
  return results.data;
});

export default component$(() => {
  const postData = usePostData();

  console.log("POST DATA", postData.value.post.body.children);

  return (
    <>
      <Counter />
      <h1>{postData.value.post.title}</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </>
  );
});

// ... rest of the file remains unchanged
