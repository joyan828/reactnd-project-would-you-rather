import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function TabMenu (props) {
    const {labels, value, onhandleChange} = props;
    return (
        <Tabs
            value={value}
            onChange={(e, index) => onhandleChange(index)}
            centered
        >
            {labels.map((item, index) => (
                <Tab
                    key={index} 
                    disableRipple={true}
                    label={item} 
                    {...a11yProps(index)} 
                />
            ))}
        </Tabs>

    );
};

export function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          children
        )}
      </div>
    );
}
  
TabMenu.propTypes = {
    labels: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired,
    onhandleChange: PropTypes.func.isRequired,
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default TabMenu;