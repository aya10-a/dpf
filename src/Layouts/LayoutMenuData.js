import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);    
    const [isClothes, setIsClothes] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isBeauty, setIsBeauty] = useState(false);
    const[isPhones, setIsPhones]=useState(false);
    const[isElectromenagers, setIsElectromenagers]=useState(false);
     
    // Apps
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isCRM, setIsCRM] = useState(false);
    const [isCrypto, setIsCrypto] = useState(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
    const [isJobs, setIsJobs] = useState(false);
    const [isJobList, setIsJobList] = useState(false);
    const [isCandidateList, setIsCandidateList] = useState(false);

   // Authentication
   const [isSignIn, setIsSignIn] = useState(false);
   const [isSignUp, setIsSignUp] = useState(false);
   const [isPasswordReset, setIsPasswordReset] = useState(false);

    // Pages
    const [isProfile, setIsProfile] = useState(false);
    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
       
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'Beauty') {
            setIsBeauty(false);
        }
        if (iscurrentState !== 'Clothes') {
            setIsClothes(false);
        }
        if (iscurrentState !=='Phones'){
            setIsPhones(false);
        }
        if (iscurrentState !=='Electromenagers'){
            setIsElectromenagers(false);
        }
    },
     [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isClothes,
        isPages,
        isBeauty,
        isPhones,
        isElectromenagers,  
    ]);
    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },

        {
            id: "Beauty",
            label: "Beauty",
            icon: "bx bx-happy-heart-eyes",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsBeauty(!isBeauty);
                setIscurrentState('Beauty');
                
            },
            stateVariables: isBeauty,
            subItems: [
                { id: "Makeup", label: "Makeup", link: "/makeup", parentId: "Beauty" },
                { id: "SkinCare", label: "Skin Care Products", link: "/SkinCare", parentId: "Beauty" },
                { id: "Parfums", label: "Parfums", link: "/Parfum", parentId: "Beauty" },
                { id: "Accessories", label: "Accessories", link: "/Accessories", parentId: "Beauty" },
            ],
        },

        {
            id: "Clothes",
            label: "Clothes",
            icon: "ri-t-shirt-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsClothes(!isClothes);
                setIscurrentState('Clothes');   
            },
            stateVariables: isClothes,
            subItems: [
                {
                    id: "Women",
                    label: "Women",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSignIn(!isSignIn);
                    },
                    parentId: "Clothes",
                    stateVariables: isSignIn,
                    childItems: [
                        
                        { id: 2, label: "Dresses", link: "/auth-signin-cover" },
                        { id: 2, label: "shirt", link: "/auth-signin-cover" },
                        { id: 2, label: "Bags", link: "/auth-signin-cover" },
                    ]
                },
                {
                    id: "Men",
                    label: "Men",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSignUp(!isSignUp);
                    },
                    parentId: "Clothes",
                    stateVariables: isSignUp,
                    childItems: [
                    
                        { id: 2, label: "T-shirt", link: "/auth-signup-cover" },
                        { id: 2, label: "Pants", link: "/auth-signup-cover" },
                        { id: 2, label: "Suit", link: "/auth-signup-cover" }
                    ]
                },
                {
                    id: "Kids",
                    label: "Kids",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsPasswordReset(!isPasswordReset);
                    },
                    parentId: "Clothes",
                    stateVariables: isPasswordReset,
                    childItems: [
                        { id: 2, label: "clothes", link: "/auth-pass-reset-cover" }   
                    ]
                },
            ],
        },
  
        {
            id: ' ElectronicDevices',
            label: ' Electronic devices',
            icon: 'las la-laptop-code',
            link: "/#",
            click: function (e) {
                 e.preventDefault(); 
                 setIsElectromenagers(!isElectromenagers); 
                 setIscurrentState('Electromenagers');
            },
            stateVariables: isElectromenagers,
            subItems: [
                { id: "Laptops", label: "Laptops", link: "/Laptops  ", parentId: "ElectronicDevices'" },
                { id: "Phones", label: "Phones", link: "/Phones  ", parentId: "ElectronicDevices'" },
                { id: "Accessories", label: "Accessories", link: "/Accessories", parentId: "ElectronicDevices'" },
            ],
        },

        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
            },
            subItems: [
                {
                    id: "analytics",
                    label: "Analytics",
                    link: "/dashboard-analytics",
                    parentId: "dashboard",
                },
                {
                    id: "crm",
                    label: "CRM",
                    link: "/dashboard-crm",
                    parentId: "dashboard",
                },
                {
                    id: "ecommerce",
                    label: "Ecommerce",
                    link: "/dashboard",
                    parentId: "dashboard",
                },
                {
                    id: "crypto",
                    label: "Crypto",
                    link: "/dashboard-crypto",
                    parentId: "dashboard",
                },
                {
                    id: "projects",
                    label: "Projects",
                    link: "/dashboard-projects",
                    parentId: "dashboard",
                },
                {
                    id: "nft",
                    label: "NFT",
                    link: "/dashboard-nft",
                    parentId: "dashboard",
                },
                {
                    id: "job",
                    label: "Job",
                    link: "/dashboard-job",
                    parentId: "dashboard",
                    badgeColor: "success",
                    badgeName: "New",
                },
            ],
        },

        {
            id: "apps",
            label: "Apps",
            icon: "ri-apps-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsApps(!isApps);
                setIscurrentState('Apps');
               
            },
            stateVariables: isApps,
            subItems: [
                {
                    id: "appsecommerce",
                    label: "Ecommerce",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsEcommerce(!isEcommerce);
                    },
                    parentId: "apps",
                    stateVariables: isEcommerce,
                    childItems: [
                        { id: 1, label: "Products", link: "/apps-ecommerce-products", parentId: "apps" },
                        { id: 2, label: "Product Details", link: "/apps-ecommerce-product-details", parentId: "apps" },
                        { id: 3, label: "Create Product", link: "/apps-ecommerce-add-product", parentId: "apps" },
                        { id: 4, label: "Orders", link: "/apps-ecommerce-orders", parentId: "apps" },
                        { id: 5, label: "Order Details", link: "/apps-ecommerce-order-details", parentId: "apps" },
                        { id: 6, label: "Customers", link: "/apps-ecommerce-customers", parentId: "apps" },
                        { id: 7, label: "Shopping Cart", link: "/apps-ecommerce-cart", parentId: "apps" },
                        { id: 8, label: "Checkout", link: "/apps-ecommerce-checkout", parentId: "apps" },
                        { id: 9, label: "Sellers", link: "/apps-ecommerce-sellers", parentId: "apps" },
                        { id: 10, label: "Seller Details", link: "/apps-ecommerce-seller-details", parentId: "apps" },
                    ]
                },
                {
                    id: "appsprojects",
                    label: "Projects",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsProjects(!isProjects);
                    },
                    parentId: "apps",
                    stateVariables: isProjects,
                    childItems: [
                        { id: 2, label: "Overview", link: "/apps-projects-overview", parentId: "apps", },
                        { id: 3, label: "Create Product", link: "/apps-projects-create", parentId: "apps", },
                    ]
                },
               
                {
                    id: "appscrm",
                    label: "CRM",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsCRM(!isCRM);
                    },
                    parentId: "apps",
                    stateVariables: isCRM,
                    childItems: [
                        { id: 1, label: "Contacts", link: "/apps-crm-contacts" },
                        { id: 4, label: "Leads", link: "/apps-crm-leads" },
                    ]
                },
                {
                    id: "appscrypto",
                    label: "Crypto",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsCrypto(!isCrypto);
                    },
                    parentId: "apps",
                    stateVariables: isCrypto,
                    childItems: [
                        { id: 1, label: "Transactions", link: "/apps-crypto-transactions" },
                        { id: 2, label: "Buy & Sell", link: "/apps-crypto-buy-sell" },
                        { id: 3, label: "Orders", link: "/apps-crypto-orders" },
                        { id: 4, label: "My Wallet", link: "/apps-crypto-wallet" },
                        { id: 5, label: "ICO List", link: "/apps-crypto-ico" },
                        { id: 6, label: "KYC Application", link: "/apps-crypto-kyc" },
                    ]
                },
                {
                    id: "NFTMarketplace",
                    label: "NFT Marketplace",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsNFTMarketplace(!isNFTMarketplace);
                    },
                    parentId: "apps",
                    stateVariables: isNFTMarketplace,
                    childItems: [
                        { id: 1, label: "Marketplace", link: "/apps-nft-marketplace" },
                        { id: 2, label: "Explore Now", link: "/apps-nft-explore" },
                        { id: 3, label: "Live Auction", link: "/apps-nft-auction" },
                        { id: 4, label: "Item Details", link: "/apps-nft-item-details" },
                        { id: 5, label: "Collections", link: "/apps-nft-collections" },
                        { id: 6, label: "Creators", link: "/apps-nft-creators" },
                        { id: 7, label: "Ranking", link: "/apps-nft-ranking" },
                        { id: 8, label: "Wallet Connect", link: "/apps-nft-wallet" },
                        { id: 9, label: "Create NFT", link: "/apps-nft-create" },
                    ]
                },
                {
                    id: "job",
                    label: "Jobs",
                    link: "/#",
                    parentId: "apps",
                    badgeName: "New",
                    badgeColor: "success",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsJobs(!isJobs);
                    },
                    stateVariables: isJobs,
                    childItems: [
                        {
                            id: 1,
                            label: "Statistics",
                            link: "/apps-job-statistics",
                            parentId: "apps",
                        },
                        {
                            id: 2,
                            label: "Job Lists",
                            link: "/#",
                            parentId: "apps",
                            isChildItem: true,
                            stateVariables: isJobList,
                            click: function (e) {
                                e.preventDefault();
                                setIsJobList(!isJobList);
                            },
                            childItems: [
                                {
                                    id: 1,
                                    label: "List",
                                    link: "/apps-job-lists",
                                    parentId: "apps",
                                },
                                {
                                    id: 2,
                                    label: "Grid",
                                    link: "/apps-job-grid-lists",
                                    parentId: "apps",
                                },
                                {
                                    id: 3,
                                    label: "Overview",
                                    link: "/apps-job-details",
                                    parentId: "apps",
                                },
                            ],
                        },
                        {
                            id: 3,
                            label: "Candidate Lists",
                            link: "/#",
                            parentId: "apps",
                            isChildItem: true,
                            stateVariables: isCandidateList,
                            click: function (e) {
                                e.preventDefault();
                                setIsCandidateList(!isCandidateList);
                            },
                            childItems: [
                                {
                                    id: 1,
                                    label: "List View",
                                    link: "/apps-job-candidate-lists",
                                    parentId: "apps",
                                },
                                {
                                    id: 2,
                                    label: "Grid View",
                                    link: "/apps-job-candidate-grid",
                                    parentId: "apps",
                                },
                            ],
                        },
                        {
                            id: 4,
                            label: "Application",
                            link: "/apps-job-application",
                            parentId: "apps",
                        },
                        {
                            id: 5,
                            label: "New Job",
                            link: "/apps-job-new",
                            parentId: "apps",
                        },
                        {
                            id: 6,
                            label: "Companies List",
                            link: "/apps-job-companies-lists",
                            parentId: "apps",
                        },
                        {
                            id: 7,
                            label: "Job Categories",
                            link: "/apps-job-categories",
                            parentId: "apps",
                        },
                    ],
                },
                {
                    id: "apikey",
                    label: "API Key",
                    link: "/apps-api-key",
                    parentId: "apps",
                    badgeName: "New",
                    badgeColor: "success"
                },
            ],
        },

        {
            id: "pages",
            label: "Pages",
            icon: "ri-pages-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsPages(!isPages);
                setIscurrentState('Pages');
            },
            stateVariables: isPages,
            subItems: [
                {
                    id: "starter",
                    label: "Starter",
                    link: "/pages-starter",
                    parentId: "pages",
                },
                {
                    id: "profile",
                    label: "Profile",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsProfile(!isProfile);
                    },
                    parentId: "pages",
                    stateVariables: isProfile,
                    childItems: [
                        { id: 1, label: "Simple Page", link: "/pages-profile", parentId: "pages" },
                        { id: 2, label: "Settings", link: "/pages-profile-settings", parentId: "pages" },
                    ]
                },
                { id: "team", label: "Team", link: "/pages-team", parentId: "pages" },
   
                { id: "faqs", label: "FAQs", link: "/pages-faqs", parentId: "pages" },
              
                { id: "gallery", label: "Gallery", link: "/pages-gallery", parentId: "pages" },
             
             
                { id: "searchResults", label: "Search Results", link: "/pages-search-results", parentId: "pages" },
            ],
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;