import { COMPONENTS, SITE_INFO, USER } from "@/data"
import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateOgImageUrl = (title: string, description: string) => {
  const ogImageUrl = `/og?title=${encodeURI(title)}&description=${encodeURI(description)}`
  return ogImageUrl
}

export const generateMetaDataForOg = (componentName: string): Metadata => {
  const component = COMPONENTS.find((c) => c.name === componentName)
  const ogImageUrl = generateOgImageUrl(
    component?.title || SITE_INFO.siteName,
    component?.description || SITE_INFO.description
  )
  return generateMetaData(
    component?.title || SITE_INFO.siteName,
    component?.description || SITE_INFO.description,
    ogImageUrl || SITE_INFO.ogImage
  )
}

const generateMetaData = (
  title: string,
  description: string,
  imageUrl: string
): Metadata => {
  return {
    metadataBase: new URL(SITE_INFO.url),
    alternates: {
      canonical: "/",
    },
    title: {
      template: title,
      default: description,
    },
    description: description,
    keywords: SITE_INFO.keywords,
    authors: [
      {
        name: USER.fullName,
        url: SITE_INFO.url,
      },
    ],
    creator: USER.fullName,
    openGraph: {
      siteName: title,
      url: "/",
      type: "profile",
      firstName: USER.firstName,
      lastName: USER.lastName,
      username: USER.username,
      gender: USER.gender,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: SITE_INFO.name,
        },
      ],
      locale: "en_US",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    twitter: {
      card: "summary_large_image",
      creator: USER.twitterUsername,
      images: [SITE_INFO.ogImage],
    },
    icons: {
      icon: [
        {
          url: "/assets/favicon.ico",
          sizes: "any",
        },
      ],
      apple: {
        url: "/assets/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    },
  }
}
