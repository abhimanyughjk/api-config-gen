// assets/js/presets.js
// API Provider presets — base URLs, auth types, and field hints

const API_PRESETS = {
  custom: {
    name: 'Custom',
    baseUrl: '',
    authType: 'bearer',
    keyName: 'API_KEY',
    rateLimit: 60,
    extra: {}
  },
  openai: {
    name: 'OpenAI',
    baseUrl: 'https://api.openai.com/v1',
    authType: 'bearer',
    keyName: 'OPENAI_API_KEY',
    rateLimit: 60,
    extra: {
      ORG_ID: 'your_org_id',
      MODEL: 'gpt-4o',
      MAX_TOKENS: '4096'
    }
  },
  anthropic: {
    name: 'Anthropic (Claude)',
    baseUrl: 'https://api.anthropic.com/v1',
    authType: 'api_key_header',
    keyName: 'ANTHROPIC_API_KEY',
    rateLimit: 60,
    extra: {
      ANTHROPIC_VERSION: '2023-06-01',
      MODEL: 'claude-opus-4-5'
    }
  },
  github: {
    name: 'GitHub',
    baseUrl: 'https://api.github.com',
    authType: 'bearer',
    keyName: 'GITHUB_TOKEN',
    rateLimit: 60,
    extra: {
      GITHUB_API_VERSION: '2022-11-28'
    }
  },
  stripe: {
    name: 'Stripe',
    baseUrl: 'https://api.stripe.com/v1',
    authType: 'bearer',
    keyName: 'STRIPE_SECRET_KEY',
    rateLimit: 100,
    extra: {
      STRIPE_PUBLISHABLE_KEY: 'pk_test_your_key',
      STRIPE_WEBHOOK_SECRET: 'whsec_your_secret'
    }
  },
  twilio: {
    name: 'Twilio',
    baseUrl: 'https://api.twilio.com/2010-04-01',
    authType: 'basic',
    keyName: 'TWILIO_AUTH_TOKEN',
    rateLimit: 100,
    extra: {
      TWILIO_ACCOUNT_SID: 'ACxxxxxxxxxxxxxxxx',
      TWILIO_PHONE_NUMBER: '+1234567890'
    }
  },
  firebase: {
    name: 'Firebase',
    baseUrl: 'https://your-project.firebaseio.com',
    authType: 'api_key_query',
    keyName: 'FIREBASE_API_KEY',
    rateLimit: 120,
    extra: {
      FIREBASE_PROJECT_ID: 'your-project-id',
      FIREBASE_MESSAGING_SENDER_ID: '000000000000',
      FIREBASE_APP_ID: '1:000:web:000',
      FIREBASE_STORAGE_BUCKET: 'your-project.appspot.com'
    }
  },
  supabase: {
    name: 'Supabase',
    baseUrl: 'https://your-project.supabase.co',
    authType: 'api_key_header',
    keyName: 'SUPABASE_ANON_KEY',
    rateLimit: 100,
    extra: {
      SUPABASE_URL: 'https://your-project.supabase.co',
      SUPABASE_SERVICE_ROLE_KEY: 'your_service_role_key'
    }
  },
  mongodb: {
    name: 'MongoDB Atlas',
    baseUrl: 'https://data.mongodb-api.com/app/data-api/endpoint/data/v1',
    authType: 'api_key_header',
    keyName: 'MONGODB_API_KEY',
    rateLimit: 100,
    extra: {
      MONGODB_CLUSTER: 'Cluster0',
      MONGODB_DATABASE: 'your_database',
      MONGODB_COLLECTION: 'your_collection'
    }
  },
  aws: {
    name: 'AWS',
    baseUrl: 'https://s3.amazonaws.com',
    authType: 'bearer',
    keyName: 'AWS_SECRET_ACCESS_KEY',
    rateLimit: 100,
    extra: {
      AWS_ACCESS_KEY_ID: 'AKIAIOSFODNN7EXAMPLE',
      AWS_REGION: 'us-east-1',
      AWS_DEFAULT_REGION: 'us-east-1'
    }
  },
  gcp: {
    name: 'Google Cloud',
    baseUrl: 'https://storage.googleapis.com',
    authType: 'oauth2',
    keyName: 'GOOGLE_API_KEY',
    rateLimit: 100,
    extra: {
      GOOGLE_PROJECT_ID: 'your-project-id',
      GOOGLE_APPLICATION_CREDENTIALS: '/path/to/service-account.json'
    }
  },
  azure: {
    name: 'Azure',
    baseUrl: 'https://management.azure.com',
    authType: 'bearer',
    keyName: 'AZURE_CLIENT_SECRET',
    rateLimit: 100,
    extra: {
      AZURE_SUBSCRIPTION_ID: 'your-subscription-id',
      AZURE_CLIENT_ID: 'your-client-id',
      AZURE_TENANT_ID: 'your-tenant-id'
    }
  },
  sendgrid: {
    name: 'SendGrid',
    baseUrl: 'https://api.sendgrid.com/v3',
    authType: 'bearer',
    keyName: 'SENDGRID_API_KEY',
    rateLimit: 100,
    extra: {
      SENDGRID_FROM_EMAIL: 'you@example.com',
      SENDGRID_FROM_NAME: 'Your App'
    }
  },
  slack: {
    name: 'Slack',
    baseUrl: 'https://slack.com/api',
    authType: 'bearer',
    keyName: 'SLACK_BOT_TOKEN',
    rateLimit: 60,
    extra: {
      SLACK_SIGNING_SECRET: 'your_signing_secret',
      SLACK_CHANNEL_ID: 'C0000000000'
    }
  },
  discord: {
    name: 'Discord',
    baseUrl: 'https://discord.com/api/v10',
    authType: 'bearer',
    keyName: 'DISCORD_BOT_TOKEN',
    rateLimit: 50,
    extra: {
      DISCORD_CLIENT_ID: '000000000000000000',
      DISCORD_GUILD_ID: '000000000000000000'
    }
  },
  twitter: {
    name: 'Twitter / X',
    baseUrl: 'https://api.twitter.com/2',
    authType: 'bearer',
    keyName: 'TWITTER_BEARER_TOKEN',
    rateLimit: 15,
    extra: {
      TWITTER_API_KEY: 'your_api_key',
      TWITTER_API_SECRET: 'your_api_secret',
      TWITTER_ACCESS_TOKEN: 'your_access_token',
      TWITTER_ACCESS_SECRET: 'your_access_secret'
    }
  },
  spotify: {
    name: 'Spotify',
    baseUrl: 'https://api.spotify.com/v1',
    authType: 'oauth2',
    keyName: 'SPOTIFY_ACCESS_TOKEN',
    rateLimit: 100,
    extra: {
      SPOTIFY_CLIENT_ID: 'your_client_id',
      SPOTIFY_CLIENT_SECRET: 'your_client_secret',
      SPOTIFY_REDIRECT_URI: 'http://localhost:3000/callback'
    }
  },
  razorpay: {
    name: 'Razorpay',
    baseUrl: 'https://api.razorpay.com/v1',
    authType: 'basic',
    keyName: 'RAZORPAY_KEY_SECRET',
    rateLimit: 100,
    extra: {
      RAZORPAY_KEY_ID: 'rzp_test_your_key_id',
      RAZORPAY_WEBHOOK_SECRET: 'your_webhook_secret'
    }
  },
  mailchimp: {
    name: 'Mailchimp',
    baseUrl: 'https://usX.api.mailchimp.com/3.0',
    authType: 'basic',
    keyName: 'MAILCHIMP_API_KEY',
    rateLimit: 10,
    extra: {
      MAILCHIMP_SERVER_PREFIX: 'us1',
      MAILCHIMP_LIST_ID: 'your_list_id'
    }
  }
};
