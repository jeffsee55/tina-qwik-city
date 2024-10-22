import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Counter } from "~/components/counter/counter";
import client from "../../tina/__generated__/client";
import { useTina, tinaField } from "~/hooks/use-tina";

export const usePostData = routeLoader$(async () => {
  const results = await client.queries.post({
    relativePath: "hello-world.mdx",
  });
  return results;
});

export default component$(() => {
  const postData = usePostData();
  const { data } = useTina(postData.value);

  return (
    <>
      <Counter />
      <h1 data-tina-field={tinaField(data.value.post, "title")}>
        {data.value.post.title}
      </h1>
      <div data-tina-field={tinaField(data.value.post, "posted")}>
        {data.value.post.posted}
      </div>
      <div>
        <pre>{JSON.stringify(data.value.post.body, null, 2)}</pre>
      </div>
    </>
  );
});

// ... rest of the file remains unchanged
