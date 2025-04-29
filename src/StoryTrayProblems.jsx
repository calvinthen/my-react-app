import React from 'react'

export function StoryTray()
{
    let addNewStory;

    addNewStory.push({
        id: 'create',
        label: 'Create Story',
      },{
        id: 'test',
        label: 'new story',
      });
      return (
        <ul>
          {addNewStory.map(story => (
            <li key={story.id}>
              {story.label}
            </li>
          ))}
        </ul>
      );
}

const StoryTrayProblems = () => {
  return (
    <StoryTray/>
  )
}

export default StoryTrayProblems
