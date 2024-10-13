import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Counter } from "~/components/counter/counter";
import client from "../../tina/__generated__/client";
// import { useTina } from "~/hooks/use-tina";

export const usePostData = routeLoader$(async () => {
  const results = await client.queries.post({
    relativePath: "hello-world.mdx",
  });
  return results;
});

export default component$(() => {
  const postData = usePostData();
  // const { data } = useTina(postData.value);

  return (
    <>
      <Counter />
      <h1>{postData.value.data.post.title}</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </>
  );
});

// ... rest of the file remains unchanged
