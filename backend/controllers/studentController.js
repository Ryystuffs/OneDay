import { supabase } from "../connection/supabaseClient.js"

export async function addStudent (req, res) {
   try {
    const { student_number, full_name, email_address, year_level, course} = req.body
    
    const { data, error } = await supabase
      .from('students')
      .insert([{ student_number, full_name, email_address, year_level, course }])
      .select()

    if (error) throw error

    res.status(201).json({
      success: true,
      data
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

export async function updateStudent (req, res) {
  try {
    const { id } = req.params
    const toBeUpdate  = req.body
    console.log(toBeUpdate)
    
    const { data, error } = await supabase
      .from('students')
      .update(toBeUpdate)
      .eq('id', id)
      .select()

    if (error) throw error

    res.status(201).json({
      success: true,
      data
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

export async function deleteStudent (req, res) { 
  try {
    const { id } = req.params

    const { data, error } = await supabase
      .from('students')
      .delete()
      .eq('id', id)
      .select() // returns the deleted row(s)

    if (error) throw error

    res.json({
      success: true,
      message: 'User deleted successfully'
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }

}

export async function getStudent (req, res) {
  
}