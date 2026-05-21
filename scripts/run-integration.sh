docker compose up -d
echo '🟡 - Waiting for database to be ready...'
./wait-for-it.sh "postgresql://postgres:mysecretpassword@localhost:5432/postgres" -- echo '🟢 - Database is ready!'
cd ..
npm run db:migrate
npm run db:generate
npm run test
cd scripts
docker compose down