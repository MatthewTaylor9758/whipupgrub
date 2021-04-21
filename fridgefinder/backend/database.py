from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Food, Pantry

with app.app_context():
  db.drop_all()
  db.crate_all()

  # Place for the seeder files

  # db.session.add(seeder_files)
  db.session.commit()
