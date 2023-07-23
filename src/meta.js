import { meta } from '$astro/site';

export function Meta({ title }) {
  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </>
  );
}
