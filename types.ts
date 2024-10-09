import { Member, Profile, Server } from "@prisma/client";

export type ServerWithMebmersWithProfiles = Server & {
  members: (Member & {
    profile: Profile;
  })[];
};
