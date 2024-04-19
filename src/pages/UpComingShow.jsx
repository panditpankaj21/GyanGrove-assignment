import React, { useState, useEffect, useRef } from 'react';
import { UpcomingCard } from '../components/index.js';
import { GrFormNextLink } from 'react-icons/gr';

function UpComingShow() {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();
    const lastElementRef = useRef();

    useEffect(() => {
        async function fetchEvents() {
            setLoading(true);
            try {
                const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`);
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                setContent(prevContent => [...prevContent, ...data.events]);
                if(data.totalPages === page){
                    setHasMore(false);
                }else{
                    setHasMore(true);
                }
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            } finally {
                setLoading(false);
            }
        }
        if(hasMore){
            fetchEvents();
        }
    }, [page]);

    useEffect(() => {
        if (loading) return;

        if (observer.current) observer.current.disconnect();

        const callback = entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prev => prev + 1);
            }
        };

        observer.current = new IntersectionObserver(callback);
        if (lastElementRef.current) {
            observer.current.observe(lastElementRef.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [loading, hasMore]);

    return (
        <div className="sm:mx-14 mt-5 sm:mr-40">
            <div className="flex justify-around sm:justify-between">
                <div className="flex items-center mb-1">
                    <p>Upcoming events</p>
                    <GrFormNextLink className="text-xl ml-1" />
                </div>
                <p className="underline cursor-pointer">see all</p>
            </div>
            <div className="sm:grid flex flex-col gap-10 items-center sm:grid-cols-3 sm:gap-y-7 mb-5">
                {content.map((item, index) => {
                    if (index === content.length - 1) {
                        return <div ref={lastElementRef} key={index}><UpcomingCard item={item} /></div>;
                    } else {
                        return <div key={index}><UpcomingCard item={item} /></div>;
                    }
                })}
            </div>
            {loading && <div className='flex items-center justify-center p-3'>
                <div className="spinner"></div>
             </div>}
        </div>
    );
}

export default UpComingShow;
