export const homeLoader = async ({
  params,
}: {
  params: { userId: string };
}) => {
  const res = await fetch(`/api/users/${params.userId}`);
  if (!res.ok) throw new Error("User not found");
  return res.json();
};
