import React from 'react';
import { useParams } from 'react-router-dom';
import './ResourceDetail.css';

const ResourceDetail = () => {
    let { id } = useParams();
    // You would fetch the detail based on the ID
    const resourceDetail = { id, name: `Resource ${id}`, description: `Description for Resource ${id}` };

    return (
        <div className="resource-detail">
            <h2>{resourceDetail.name}</h2>
            <p>{resourceDetail.description}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ResourceDetail;
