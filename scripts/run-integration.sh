docker compose up -d
echo '🟡 - Waiting for database to be ready...'
./wait-for-it.sh "postgresql://postgres:mysecretpassword@localhost:5432/postgres" -- echo '🟢 - Database is ready!'
cd ..
npx prisma migrate dev --name init
npm run test
cd scripts
docker compose down