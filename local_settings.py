
DEBUG = True

# Make these unique, and don't share it with anybody.
SECRET_KEY = "293c8b13-6c5d-465d-969c-0cf00bf261cf7626c8b3-dff1-45a3-bcbb-82a755505a9e5359f427-0a68-48b5-9677-3ef3092951a0"
NEVERCACHE_KEY = "71a42f17-e0e3-4b9b-a0d7-10ff4520d021731c4914-cb04-4242-8b69-bdbb13a9588a908c3678-f4cc-4f52-8d56-0b793514bfad"

DATABASES = {
    "default": {
        # Ends with "postgresql_psycopg2", "mysql", "sqlite3" or "oracle".
        "ENGINE": "django.db.backends.sqlite3",
        # DB name or path to database file if using sqlite3.
        "NAME": "dev.db",
        # Not used with sqlite3.
        "USER": "",
        # Not used with sqlite3.
        "PASSWORD": "",
        # Set to empty string for localhost. Not used with sqlite3.
        "HOST": "",
        # Set to empty string for default. Not used with sqlite3.
        "PORT": "",
    }
}
