import React from 'react';
export interface MenuTabProps {
    setCurrentTab: (tab: string) => void,
    currentTab: string
}

const MenuTabs = (props: MenuTabProps) => {
    const buttons: string[] = ["Wire Fox Terrier", "Welsh Sheepdog"];

    return <div className='flex w-full justify-center gap-3 p-5 font font-Oswald'>
        {
            buttons.map(button => {
                return <button className={`px-7 py-2 text-gray-800 dark:text-gray-200 ${props.currentTab === button ? "border border-primary-color" : "border"}`}
                    onClick={() => {
                        props.setCurrentTab(button);
                    }}>{button}</button>
            })
        }
    </div>
}

export default MenuTabs;