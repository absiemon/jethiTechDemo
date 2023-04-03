import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import calender from '../assets/calender.png'
import '../App.css'

export default function OfferingCard({ element, heading, content, type }) {
    return (
        <Card sx={{ maxWidth: 345 }} className={`${type==='offering' && 'card'}`} style={{borderRadius:'10px', padding:'12px', boxShadow:`${(type==='team' || type=='blog') && '0px 4px 61px rgba(0, 0, 0, 0.16)'}`}}>
            
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={element}
            />
            <CardContent>
                {type=== 'blog'&&
                <>
                    <div className='text-primary text-sm'>Real Estate, Analysis</div>
                    <div className='flex justify-between mt-2 mb-2'>
                        <div className='flex gap-3 items-center'>
                            <img src={calender} alt='img'/>
                            <p className='text-sm font-semibold'>09 june 2022</p>
                        </div>
                        <p className='text-sm font-semibold'>By admin</p>
                    </div>
                </>
                }
                <Typography gutterBottom variant="h5" component="div" style={{ color: '#002550' }}>
                    {heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                { type === 'offering' &&
                    <>
                    <div role='button' className='h-10 w-40 text-center py-1 rounded-md text-lg font-semibold' style={{ border: '1px solid #01244A' }}>Contact us &#8594;
                    </div>
                    <div className="text-primary">{heading === "Background verification" && "INR 3000/Project"}</div>
                    </>
                }
                {type==='team' && 
                    <Link className='text-primary'>View more</Link>
                }
                {type==='blog' && 
                    <div role='button' className='h-10 w-40 text-center py-1 rounded-md text-lg font-semibold' style={{ border: '1px solid #01244A' }}>View more &#8594;
                    </div>
                }
            </CardActions>
        </Card>
    )
}