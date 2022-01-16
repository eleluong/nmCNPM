import { useState } from 'react';
import { Box, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab'
import styles from "./Content.module.css"
import Products from '../products/products';
import Footer from '../Footer/Footer'

function Content() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={styles.content}>
            <div className={styles.background}></div>
            <label className={styles.label}>Danh mục</label>
            <div className={styles.tabs}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={styles.tabs_list}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="<< Home >>" value="1" style={{ 'font-weight': '700' }} />
                                <Tab label="Đồ uống" value="2" style={{ 'font-weight': '700' }} />
                                <Tab label="Sách" value="3" style={{ 'font-weight': '700' }} />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><Products /></TabPanel>
                        <TabPanel value="2">Đồ uống</TabPanel>
                        <TabPanel value="3">Sách</TabPanel>
                    </TabContext>
                </Box>
                <Footer/>
            </div>
        </div>
    )
}

export default Content