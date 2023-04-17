import React from "react";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import getFavoritesListings from "../actions/getFavoritesListings";
import getCurrentUser from "../actions/getCurrentUser";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoritesListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorities found"
          subtitle="Looks like you have no favorite listings"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
