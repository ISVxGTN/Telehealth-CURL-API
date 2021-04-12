const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

//----Get All Consulting Physician-------------------------
const getConsultingPhysician = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY fullname ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//----Get All Local Facility-------------------------
const getLocalFacility = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY facility_name ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//----Get All Local Providers-------------------------
const getLocalProviders = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY fullname ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//----Get All Patient Profiles-------------------------
const getPatientProfiles = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY fullname ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//------Get a Single Consultant----------------------------
  const getConsultantByFullname = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM public.consult_phys WHERE fullname = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//------Get a Single Local Facility----------------------------
const getLocalFacilityByFacilityname = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM public.local_facility WHERE facility_name = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//------Get a Single Local Provider ----------------------------
const getLocalProviderByFullname = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM public.local_provider WHERE fullname = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//------Get a Single Patient Profile----------------------------
const getPatientProfileByFullname = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM public.patient_profile WHERE fullname = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//-----------POST A NEW Consultant-------------------
const createConsultingPhysician = (request, response) => {
    const { fullname, email, telephone, languages, specialty, time_in, training, certification, special_skills, special_interest, experience, time_out, location_ } = request.body
  
    pool.query('INSERT INTO users (fullname, email, telephone, languages, specialty, time_in, training, certification, special_skills, special_interest, experience, time_out, location_) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [fullname, email, telephone, languages, specialty, time_in, training, certification, special_skills, special_interest, experience, time_out, location_], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }

//-----------POST A NEW Local Facility-------------------
const createLocalFacility = (request, response) => {
    const { facility_name, facility_type, facility_location, o_i_c, staffing, supplies, diagnostic_equipment, telehealth_equipment, pharmacy_near, major_medic_centre, hospital_near, physician_near, environment, economic_status } = request.body
  
    pool.query('INSERT INTO users (facility_name, facility_type, facility_location, o_i_c, staffing, supplies, diagnostic_equipment, telehealth_equipment, pharmacy_near, major_medic_centre, hospital_near, physician_near, environment, economic_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, 14)', [facility_name, facility_type, facility_location, o_i_c, staffing, supplies, diagnostic_equipment, telehealth_equipment, pharmacy_near, major_medic_centre, hospital_near, physician_near, environment, economic_status], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }

//-----------POST A NEW Local Provider-------------------
const createLocalProvider = (request, response) => {
    const { fullname, gender, provider_type, training, experience, computer_skill, local_facility } = request.body
  
    pool.query('INSERT INTO users (fullname, gender, provider_type, training, experience, computer_skill, local_facility) VALUES ($1, $2, $3, $4, $5, $6, $7)', [fullname, gender, provider_type, training, experience, computer_skill, local_facility], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }

//-----------POST A NEW Patient Profile-------------------
const createPatientProfile = (request, response) => {
    const { fullname, gender, contact, religion_culture, telephone, languages, assessment, history, objective, attached_files, requested_response_time, time_of_request } = request.body
  
    pool.query('INSERT INTO users (fullname, gender, contact, religion_culture, telephone, languages, assessment, history, objective, attached_files, requested_response_time, time_of_request) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [fullname, gender, contact, religion_culture, telephone, languages, assessment, history, objective, attached_files, requested_response_time, time_of_request], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }
/*
//---------- Update Data in Consulting Physician----------------------
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { fullname, email, telephone, languages, specialty, time_in, training, certification, special_skills, special_interest, experience, time_out, location_ } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

//---------- Update Data in Local Facility Name----------------------
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

//---------- Update Data in Local Provider----------------------
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

//---------- Update Data in Patient Profile----------------------
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
*/

//--------------Delete a Consulting Physician ------------------------
const deleteConsultant = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM public.consult_phys WHERE fullname = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with fullname: ${id}`)
    })
  }

//--------------Delete a Local Facility ------------------------
const deleteLocalFacility = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM public.local_facility WHERE facility_name = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with facility name: ${id}`)
    })
  }

//--------------Delete a Local Provider ------------------------
const deleteLocalProvider = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM public.local_provider WHERE fullname = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with fullname: ${id}`)
    })
  }

//--------------Delete a Patient Profile ------------------------
const deletePatientProfile = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM public.patient_profile WHERE fullname = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with fullname: ${id}`)
    })
  }
  module.exports = {
 //   getUsers,
 //   getUserById,
    getConsultingPhysician,
    getLocalFacility,
    getLocalProviders,
    getPatientProfiles,
    getConsultantByFullname,
    getLocalFacilityByFacilityname,
    getLocalProviderByFullname,
    getPatientProfileByFullname,
    createConsultingPhysician,
    createLocalFacility,
    createLocalProvider,
    createPatientProfile,
 //   createUser,
 //   updateUser,
    deleteConsultant,
    deleteLocalFacility,
    deleteLocalProvider,
    deletePatientProfile,
  }