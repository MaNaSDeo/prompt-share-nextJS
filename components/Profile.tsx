import PromptCard from "./PromptCard";

function Profile({ name, desc, data, handleEdit, handleDelete }: any) {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="prompt_layout mt-10">
        {data.map((post: any) => {
          return (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={handleEdit && handleEdit(post)}
              handleDelete={handleDelete && handleDelete(post)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Profile;
