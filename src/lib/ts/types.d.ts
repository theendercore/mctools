interface ModrinthResponse {
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

interface Gallery {
  url: string;
  featured: boolean;
  title: string;
  description?: any;
  created: string;
  ordering: number;
}

interface DonationUrl {
  id: string;
  platform: string;
  url: string;
}

interface License {
  id: string;
  name: string;
  url?: any;
}