import React from 'react';
import { Link } from 'react-router-dom';
import './ResourceList.css'

const ResourceList = () => {
    // Mock data, you can replace it with API call
    const resources = [
        { id: 1, name: 'Resource 1' },
        { id: 2, name: 'Resource 2' },
        // ... other resources
    ];

    return (
        <div className="resource-list">
            <h2>Resource List</h2>
            <ul>
                {resources.map(resource => (
                    <li key={resource.id}>
                        <Link to={`/resource/${resource.id}`}>{resource.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;
