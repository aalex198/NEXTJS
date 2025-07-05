export default async function EditPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <div>Edit Post: {slug}</div>;
}
