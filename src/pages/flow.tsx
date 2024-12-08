import { CustomTab } from "@/components/CustomTab";
import { useEffect, useRef } from "react";
import { TabList, TabPanel, Tabs } from "react-aria-components";

export default function FlowPage() {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setTimeout(() => {
            console.log(ref.current);
        }, 1000);
    }, []);

    return (
        <>
            <Tabs>
                <TabList>
                    <CustomTab id="apple" ref={ref}>
                        Apple
                    </CustomTab>
                    <CustomTab id="mango">Mango</CustomTab>
                </TabList>

                <TabPanel id="apple">Apple tab</TabPanel>
                <TabPanel id="mango">Mango tab</TabPanel>
            </Tabs>
        </>
    );
}
