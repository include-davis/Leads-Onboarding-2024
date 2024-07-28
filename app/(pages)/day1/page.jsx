"use client";

import React from 'react';
import Image from 'next/image';
import ClientCard from '@/app/(pages)/_components/clients/clients';
import { PiPenNib } from "react-icons/pi";
import { useState } from 'react';
import styles from '@/app/(pages)/_styles/pages/day1/home.module.scss'

export default function Home() {
    const [clients, setClients] = useState([
        {
            name: 'IELC Tutoring',
            season: 'WINTER/SPRING 2023',
            image: '/ielc.png',
            text: "Website and brand identity project for the Interactive Elementary Learning Center to boost credibility and increase participation in their free 7-week summer program."
        },
        {
            name: 'New Vietnam Studies Initiative',
            season: 'WINTER/SPRING 2022',
            image: '/new_vietnam_studies_initiative.png',
            text: "We developed the website for NVSI, promoting research and collaboration in fields related to contemporary Vietnam's economic, political, and cultural development."
        },
        {
            name: 'Bloom and Vine',
            season: 'FALL/WINTER 2023',
            image: '/bloom_and_vine.png',
            text: "Website project for Bloom and Vine a boutique floral design studio located in Northern California. Bloom and Vine strives to make every event unforgettable."
        },
        {
            name: 'ONELOOP',
            season: 'FALL/WINTER 2021',
            image: '/neloop.png',
            text: "Oneloop is a team of graduate and undergraduate students at UCD. They design and build a Hyperloop pod to compete in SpaceX's annual Hyperloop competition."
        },

      ]);

    return (
        <div className={styles.container}>
            <div className={styles.mission}>
                <p>Our mission is to design creative digital solutions that have a positive social impact</p>
                <div className={styles.image_container}>
                    <Image 
                        src='/new_design.png' 
                        alt="New Design"
                        style={{ objectFit: "contain" }}
                        fill={true}
                        priority={true}
                    />
                </div>
            </div>
            <div className={styles.work_container}>
                <PiPenNib className={styles.work}/>
                <h1 className={styles.work}>Recent Work</h1>
                <p className={styles.work}>Transforming ideas into incredible realities is what we do best.</p>
            </div>

            <div className={styles.cards}>
                {clients.map((client, key) => <ClientCard key={key} client={client}/>)}
            </div>
        </div>
    );
}