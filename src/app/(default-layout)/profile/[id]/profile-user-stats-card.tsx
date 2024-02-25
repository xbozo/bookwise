import { ProfileData } from "@/actions/users/fetchUserProfile";
import Image from "next/image";
import { ProfileDetailsItem } from "./profile-user-stats-item";

export function ProfileUserStatsCard({ profile }: { profile: ProfileData }) {
  return (
    <>
      <section className="flex w-full max-w-[305px] flex-col gap-5 border-l border-l-ds-gray-700 px-14 py-3">
        <div className="flex flex-col items-center">
          <div className="mb-5 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-gradient-to-r from-ds-green-100 to-ds-purple-100">
            {profile.avatar_url ? (
              <Image
                alt=""
                width={72}
                height={72}
                src={profile.avatar_url ?? ""}
                className="rounded-full"
              />
            ) : (
              <div className="flex h-[72] w-[72] items-center justify-center rounded-full bg-ds-gray-800">
                <img
                  src="/images/icons/user.svg"
                  alt={`Foto de Usuário`}
                  className="h-[60] w-[60] text-ds-gray-100"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col items-center gap-2">
            <strong>{profile.name}</strong>
            <p className="text-sm text-ds-gray-400">membro desde 2019</p>
          </div>
        </div>

        <div className="mx-auto my-5 h-1 w-8 rounded-full bg-gradient-to-r from-ds-green-100 to-ds-purple-100" />

        <div className="flex flex-col items-center gap-y-5">
          <ProfileDetailsItem
            iconSrc="/images/icons/open-book-icon.svg"
            itemTitle={profile.readPages}
            description="Páginas lidas"
          />

          <ProfileDetailsItem
            iconSrc="/images/icons/books-icon.svg"
            itemTitle={profile.ratedBooks}
            description="Livros avaliados"
          />

          <ProfileDetailsItem
            iconSrc="/images/icons/authors-icon.svg"
            itemTitle={profile.readAuthors.length}
            description="Autores lidos"
          />

          <ProfileDetailsItem
            iconSrc="/images/icons/category-icon.svg"
            itemTitle={profile.mostReadCategory ?? "Nenhuma"}
            description="Categoria mais lida"
          />
        </div>
      </section>
    </>
  );
}
