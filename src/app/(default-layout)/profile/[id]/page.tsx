"use client";

import { ProfileData } from "@/@types/user-profile";
import { fetchUserProfile } from "@/actions/user";
import { PageTitle } from "@/components/page-title";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProfileBookReviewCard } from "./profile-book-review-card";
import { ProfileBookReviewCardSkeleton } from "./profile-book-review-card-skeleton";
import { ProfileUserStatsCard } from "./profile-user-stats-card";
import { ProfileUserStatsCardSkeleton } from "./profile-user-stats-card-skeleton";
import { SearchRatedBooks } from "./search-rated-books";

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>();
  const [filteredBooks, setFilteredBooks] = useState<
    ProfileData["ratings"] | null
  >();

  const searchParams = useSearchParams();

  const params = useParams<{ id: string }>();
  const search = searchParams.get("q");

  function filterBooks(filter: string) {
    if (profile && profile.ratings) {
      const filteredBooks = profile.ratings.filter((rating) => {
        const bookName = rating.book.name.toLowerCase();
        return bookName.includes(filter.toLowerCase());
      });

      setFilteredBooks(filteredBooks);
    }
  }

  useEffect(() => {
    (async () => {
      const userProfile = await fetchUserProfile(String(params.id));

      setProfile(userProfile);
    })();
  }, []);

  useEffect(() => {
    if (search) {
      return filterBooks(search);
    }
    return setFilteredBooks(profile?.ratings || null);
  }, [search, profile]);

  return (
    <>
      <PageTitle title="Perfil">
        <Image width={32} height={32} src="/images/icons/user.svg" alt="" />
      </PageTitle>

      <main className="flex justify-between gap-14">
        <section className="flex w-3/5 flex-col gap-10">
          <SearchRatedBooks />

          <div className="flex flex-col gap-5">
            {!profile ? (
              <>
                {Array.from({ length: 3 }).map((_, i) => {
                  return <ProfileBookReviewCardSkeleton key={i} />;
                })}
              </>
            ) : (
              <>
                {(filteredBooks || profile.ratings)?.map((rating) => (
                  <ProfileBookReviewCard
                    rating_description={rating.description}
                    rating_value={rating.rate}
                    author={rating.book.author}
                    cover_url={rating.book.cover_url}
                    name={rating.book.name}
                    id={rating.book.id}
                    created_at={rating.book.created_at}
                    total_pages={rating.book.total_pages}
                    key={rating.id}
                  />
                ))}
              </>
            )}
          </div>
        </section>

        {!profile ? (
          <>
            <ProfileUserStatsCardSkeleton />
          </>
        ) : (
          <ProfileUserStatsCard profile={profile} />
        )}
      </main>
    </>
  );
}
