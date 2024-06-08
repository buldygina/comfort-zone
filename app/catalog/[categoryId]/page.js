'use client';;
import { SlBasket } from "react-icons/sl";
import '@/app/catalog/[categoryId]/catalog.css'
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FavouriteItem from "@/components/FavouriteItem";
import { useGetSpecificCategoryQuery } from "@/api/api";
import { Spin } from "antd";

export default function Catalog({ params }) {
    const router = useRouter()
    const handleButtonClick = (e) => {
        e.preventDefault()
        router.push('/items')
    };
    const { data, error, isLoading } = useGetSpecificCategoryQuery({ categoryId: params.categoryId })
    return (
        <div>
            {/*<div className='buttons'>*/}
            {/*    <p>cups</p>*/}
            {/*    <p>pillows</p>*/}
            {/*    <p>plaids</p>*/}
            {/*</div>*/}
            {isLoading ? <div style={{ display: "flex", justifyContent: "center", width: "100%", minHeight: "65svh" }}><Spin /></div>
                : <div>
                    <div className='textCandles'>
                        <p>{data.description}</p>
                    </div>
                    <div className='imageCandles'>
                        <img src={data.image} style={{ width: "20%" }} alt="" />
                    </div>
                    <div className='candleCatalog'><p style={{textTransform: "uppercase"}}>{data.name} CATALOG</p></div>
                    <div className='items'>
                        {data?.items.length > 0 && data.items.map(item => <Link
                            href={`/catalog/${params.id}/items/${item.id}`} key={item.id}>
                            <div className='Items'><img src={item.image} style={{ width: "100%" }}
                                alt="" />
                                <div className='Good'>
                                    <div className='buttonItems'><p>{item.name}</p>
                                        <div className='buttonsFavourites'><FavouriteItem
                                            defaultLiked={false} /><SlBasket />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>)
                        }
                    </div>
                </div>
            }

            <div className='back'>
                <Link href='/' style={{ textDecoration: "none", color: "inherit" }}>
                    <div className='buttonBack'><p>BACK</p></div>
                </Link>
                <AiOutlineArrowRight />
			</div>
        </div>
    );
}