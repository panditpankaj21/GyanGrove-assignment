
function OptionList(){
    const options = ["Live shows", "Streams", "Movies", "Plays", "Events", "sports", "Activites"];

    return(
        <div className="flex items-end gap-8 px-8 text-xs cursor-pointer overflow-x-scroll sm:overflow-hidden pb-5 md:pb-0">
            {options.map((option, index) => (
                <div key={index} className="text-nowrap">{option}</div>
            ))}
        </div>
    )
}

export default OptionList;