import React from 'react';
import './style.css'

const TeamMemberItem = ({ member, onRemove }) => {
  const { first_name, age, last_name } = member;

  const handleRemove = () => {
    onRemove(member);
  };

  return (
    <div className='teammember'>
      <div className='teammember1'>
        <p>{` ${first_name} ${last_name}`}</p>
        <p>{`Age :- ${age}`}</p>
      </div>
      <button className='teammember-btn' onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default TeamMemberItem;
