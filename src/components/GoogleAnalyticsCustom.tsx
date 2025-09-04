"use client"
import { GoogleAnalytics } from "nextjs-google-analytics";

const GoogleAnalyticsCustom = () =>{

    if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
        return null;
    }
    
    return <GoogleAnalytics trackPageViews gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
}

export default GoogleAnalyticsCustom

