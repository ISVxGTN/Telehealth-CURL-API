const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 5432

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//------------------------------------------
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })


app.get('/public.consult_phys', db.getConsultingPhysician)
app.get('/public.local_facility', db.getLocalFacility)
app.get('/public.local_provider', db.getLocalProviders)
app.get('/public.patient_profile', db.getPatientProfiles)

app.get('/public.consult_phys/:fullname',(db.getConsultantByFullname)
app.get('/public.local_facility/:facility_name', db.getLocalFacilityByFacilityname)
app.get('/public.local_provider/:fullname', db.getLocalProviderByFullname)
app.get('/public.patient_profile/:fullname', db.getPatientProfileByFullname)

app.get('/public.consult_phys', db.createConsultingPhysician)
app.get('/public.local_facility', db.createLocalFacility)
app.get('/public.local_provider', db.createLocalProvider,)
app.get('/public.patient_profile', db.createPatientProfile,)

app.get('/public.consult_phys/:fullname', db.deleteConsultant)
app.get('/public.local_facility/:facility_name', db.deleteLocalFacility)
app.get('/public.local_provider/:fullname', db.deleteLocalProvider)
app.get('/public.patient_profile/:fullname', db.deletePatientProfile)

/*
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
*/

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})