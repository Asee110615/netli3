import { Box, Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { faculty1Request, publicRequest } from '../../utils/publicRequest'
import { FacultyBarCharts, FacultyCharts, Sidebar, FacultyTables, FacultyTablesPart2, FacultyTablesPart3, FacultyTablesPart4, FacultyTablesPart5, FacultyTablesPart6 } from '../../components'
import { datatable, datatable1, datatable2, datatable3, datatable4, datatable5, datatable6, data, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12} from '../../utils/sampleData'


const FacultyDashboard = () => {
      const [ageData, setAgeData] = useState([])
      const [genderData, setGenderData] = useState([])
      const [civilData, setCivilData] = useState([])
      const [ethnicityData, setEthnicityData] = useState([])
      const [numofchildrenData, setNumofchildrenData] = useState([])
      const [agerangeofchildrenData, setAgerangeofchildrenData] = useState([])
      const [highesteducData, setHighesteducData] = useState([])
      const [spousestatusData, setSpousestatusData] = useState([])
      const [positionData, setPositionData] = useState([])
      const [salaryData, setSalaryData] = useState([])
      const [placeData, setPlaceData] = useState([])
      const [yearsData, setYearsData] = useState([])
      
      
     

      const [loading,setLoading] = useState(false)

      useEffect(() =>{  
        setLoading(true)
        const GetAllData = async (req,res) =>{
          try {
            
            const getAgeData = await faculty1Request.get('/getAges?age=1')
            setAgeData(getAgeData.data)

            //Gender
            const getGender = await faculty1Request.get('/getGender?gender=2')
            setGenderData(getGender.data)

            //Civil
            const getCivil = await faculty1Request.get('/getCivil?civil=4')
            setCivilData(getCivil.data)

            //Ethnicity
            const getEthnicity = await faculty1Request.get('/getEthnicity?ethnicity=5')
            setEthnicityData(getEthnicity.data)

            //Number of Children
            const getNumofchildren = await faculty1Request.get('/getNumofchildren?numofchildren=6')
            setNumofchildrenData(getNumofchildren.data)

            //Age Range of Children
            const getAgerangeofchildren = await faculty1Request.get('/getAgerangeofchildren?agerangeofchildren=7')
            setAgerangeofchildrenData(getAgerangeofchildren.data)

            //Age Highest Educational Attainment
            const getHighesteduc = await faculty1Request.get('/getHighesteduc?highesteduc=8')
            setHighesteducData(getHighesteduc.data)

            //Spouse Status
            const getSpousestatus = await faculty1Request.get('/getSpousestatus?spousestatus=10')
            setSpousestatusData(getSpousestatus.data)

            //Position Status
            const getPosition = await faculty1Request.get('/getPosition?position=13')
            setPositionData(getPosition.data)

           //Monthly Salary Bracket
           const getSalary = await faculty1Request.get('/getSalary?salary=15')
           setSalaryData(getSalary.data)

           //Place of Assignment
           const getPlace = await faculty1Request.get('/getPlace?place=12')
           setPlaceData(getPlace.data)

           //Number of accumulated  years
           const getYears = await faculty1Request.get('/getYears?years=16')
           setYearsData(getYears.data)

            setLoading(false)
          } catch (error) {
            console.log(error)
            setLoading(false)

          }
        }
        GetAllData()

      },[setAgeData])
  return (
    <Box sx={{display:'flex', flexDirection:'row', gap:1, height: '100%', width:'100%'}}>
        <Box sx={{display:'flex', flex:.5}}>
          <Sidebar />
        </Box>

        <Box sx={{display:'flex', flex:2, p:4, flexDirection:'column', height:'100%', width:'100%'}} >

            <Typography variant='h3' color="black" fontWeight={700} sx={{ display:'flex', justifyContent:'center'}}>FACULTY REPORTS</Typography>
            <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 1</Typography>
            <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>
            <Box sx={{ display:'flex', p:4, flexDirection:'column',height: '100%', width: '100%', alignItems:'center',justifyContent:'space-between' }}>

                <Box sx={{height:'400px', width:'100%', flexDirection:'column', display:'flex', gap:2}}>
                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Age</Typography>
                      <FacultyCharts data={ageData}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Sex assigned at birth</Typography>
                      <FacultyCharts data={genderData}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2' }}>
                    <Typography variant="h6" fontWeight={700}  >Civil Status</Typography>
                      <FacultyCharts data={civilData}/>
                   </Box>

                   <Box sx={{ display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Ethnicity</Typography>
                      <FacultyBarCharts data={ethnicityData}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Number of Children</Typography>
                      <FacultyCharts data={numofchildrenData}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Age Range of Children</Typography>
                      <FacultyBarCharts data={agerangeofchildrenData}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Highest Educational Attainment</Typography>
                      <FacultyCharts data={highesteducData}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Employment Status of Spouse/Partner</Typography>
                      <FacultyCharts data={spousestatusData}/>
                   </Box>

                   <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Employment</Typography>

                   {/* <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Employment Status </Typography>
                      <FacultyCharts data={data8}/>
                   </Box> */}

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Position</Typography>
                      <FacultyBarCharts data={positionData}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Monthly Salary Bracket</Typography>
                      <FacultyBarCharts data={salaryData}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Place of Assignment</Typography>
                      <FacultyBarCharts data={placeData}/>
                   </Box>  

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Accumulate Number of Years</Typography>
                      <FacultyCharts data={yearsData}/>
                   </Box>
{/*
                   <Typography variant='h5' sx={{ display:'flex', justifyContent:'center' }}>PART 2</Typography>
                   <Typography variant='h6' sx={{ display:'flex', justifyContent:'center' }}>Demographic Profile of Respondents</Typography>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <Typography variant="h6" fontWeight={700}  >Personal Experience</Typography>
                      <FacultyTables data={datatable}/>

                    <Typography variant="h6" fontWeight={700}  >Beliefs, Opinions and Thoughts</Typography>
                    <FacultyTables data={datatable1}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                   <Typography variant="h6" fontWeight={700}  >PART II A</Typography>
                    <FacultyTablesPart2 data={datatable2}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <FacultyTablesPart3 data={datatable3}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <FacultyTablesPart4 data={datatable4}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                    <FacultyTablesPart5 data={datatable5}/>
                   </Box>

                   <Box sx={{display:'flex', flexDirection:'column', gap:2, boxShadow:3, py:2,  alignItems:'center', backgroundColor:'#E5E4E2'}}>
                   <Typography variant="h6" fontWeight={700}  >PART II B</Typography>
                    <FacultyTablesPart6 data={datatable6}/>
                   </Box> */}

                </Box> 
                
                
                

            </Box>

        </Box>
        
    </Box>
  )
}


export default FacultyDashboard