type ModrinthResponse = {
  id: string;
  slug: string;
  project_type: string;
  team: string;
  title: string;
  description: string;
  body: string;
  body_url?: any;
  published: string;
  updated: string;
  approved: string;
  queued: string;
  status: string;
  requested_status: string;
  moderator_message?: any;
  license: License;
  client_side: string;
  server_side: string;
  downloads: number;
  followers: number;
  categories: string[];
  additional_categories: any[];
  game_versions: string[];
  loaders: string[];
  versions: string[];
  icon_url: string;
  issues_url: string;
  source_url: string;
  wiki_url?: any;
  discord_url: string;
  donation_urls: DonationUrl[];
  gallery: Gallery[];
  color: number;
  thread_id: string;
  monetization_status: string;
}

type Gallery = {
  url: string;
  featured: boolean;
  title: string;
  description?: any;
  created: string;
  ordering: number;
}

type DonationUrl = {
  id: string;
  platform: string;
  url: string;
}

type License = {
  id: string;
  name: string;
  url?: any;
}


type Team = {
  team_id: string;
  user: User;
  role: string;
  permissions: number;
  accepted: boolean;
  payouts_split: number;
  ordering: number;
}


type User = {
  username: string;
  name: string;
  email: string;
  bio: string;
  payout_data: PayoutData;
  id: string;
  avatar_url: string;
  created: string;
  role: string;
  badges: number;
  auth_providers: string[];
  email_verified: boolean;
  has_password: boolean;
  has_totp: boolean;
  github_id?: any;
}

type PayoutData = {
  balance: number;
  payout_wallet: string;
  payout_wallet_type: string;
  payout_address: string;
}



