import { ProfileData } from "@/@types/user-profile";
import { fetchUserProfile } from "@/actions/user";
import { PageTitle } from "@/components/page-title";
import Image from "next/image";
import { ProfileDetailsCard } from "./profile-details-card";

export default async function Profile({ params }: { params: { id: string } }) {
  const userProfile = await fetchUserProfile(String(params.id));

  if (!userProfile) {
    return <>carregando</>;
  }

  const profile: ProfileData = userProfile;

  return (
    <>
      <PageTitle title="Perfil">
        <Image width={32} height={32} src="/images/icons/user.svg" alt="" />
      </PageTitle>

      <div className="flex justify-between gap-14">
        <section className="w-3/5">
          <div className="flex gap-2 rounded-md border border-ds-gray-500 px-5 py-2">
            <input
              type="text"
              placeholder="Buscar livro ou autor"
              className="w-full bg-transparent outline-none placeholder:text-ds-gray-300/50"
              // value={search}
              // onChange={(e) => handleSearchBook(e)}
            />

            <Image
              src="/images/icons/magnifying-glass.svg"
              alt=""
              quality={100}
              width={20}
              height={20}
            />
          </div>
        </section>

        <section className="flex w-full max-w-[305px] flex-col gap-5 border-l border-l-ds-gray-700 px-14 py-3">
          <div className="flex flex-col items-center">
            <div className="mb-5 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-gradient-to-r from-ds-green-100 to-ds-purple-100">
              <Image
                alt=""
                width={72}
                height={72}
                src={profile.avatar_url ?? ""}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <strong>{profile.name}</strong>
              <p className="text-sm text-ds-gray-400">membro desde 2019</p>
            </div>
          </div>

          <div className="mx-auto my-5 h-1 w-8 rounded-full bg-gradient-to-r from-ds-green-100 to-ds-purple-100" />

          <div className="flex flex-col items-center gap-y-5">
            <ProfileDetailsCard
              iconSrc="/images/icons/open-book-icon.svg"
              itemTitle={profile.readPages}
              description="Páginas lidas"
            />

            <ProfileDetailsCard
              iconSrc="/images/icons/books-icon.svg"
              itemTitle={profile.ratedBooks}
              description="Livros avaliados"
            />

            <ProfileDetailsCard
              iconSrc="/images/icons/authors-icon.svg"
              itemTitle={profile.readAuthors}
              description="Autores lidos"
            />

            <ProfileDetailsCard
              iconSrc="/images/icons/category-icon.svg"
              itemTitle={profile.mostReadCategory ?? "Nenhuma"}
              description="Categoria mais lida"
            />
          </div>
        </section>
      </div>
    </>
  );
}
