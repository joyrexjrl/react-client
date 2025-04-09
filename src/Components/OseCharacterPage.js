import React, {useState} from 'react';

const OseCharacterPage = () => {
    const [customName, setCustomName] = useState('');
    const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
    };
  
    const handleNameChange = (e) => {
      setCustomName(e.target.value);
    };

    return (
        <section id="ose_sheet_display" class="container page_dislayer hide">
            <div class="ose_info_bar">
                <div class="ose_info_section">
                    <p class="ose_info_section_text">Old school essentials character generator, currently only available for making level 1 characters complete with randomized name and gear. This generator uses the advanced rules set for OSE where races are not classes allowing for different combinations of character builds.</p>
                </div>
                <div class="ose_input_section flex">
                    <div class="ose_input_section_inner flex col">
                        <div>
                            <input type="file" id="file_input" onChange={handleFileChange}/>
                            <p class="ose_info_helper_text">Load custom image to the portrait section of the sheet.</p>
                        </div>
                        <div>
                            <input type="text" id="ose_custom_name" class="ose_custom_name_display" placeholder="Custom name here" value={customName} onChange={handleNameChange}/>
                            <p class="ose_info_helper_text">Custom name for your character, if left blank a random name will be chosen.</p>
                        </div>
                        <div class="ose_header_dropdown_menues flex">
                            <div>
                                <select id="ose_user_race_selection" class="ose_user_dropdowns" name="character_race_dropdown">
                                    <option value="Random">Random</option>
                                    <option value="Human">Human</option>
                                    <option value="Elf">Elf</option>
                                    <option value="Dwarf">Dwarf</option>
                                    <option value="Gnome">Gnome</option>
                                    <option value="Duergar">Duergar</option>
                                    <option value="Drow">Drow</option>
                                    <option value="Halfling">Halfling</option>
                                    <option value="Svirfneblin">Svirfneblin</option>
                                    <option value="HalfElf">HalfElf</option>
                                    <option value="HalfOrc">HalfOrc</option>
                                </select>
                                <p class="ose_info_helper_text">Want a specific race? Choose from the drop down menu.</p>
                            </div>
                            <div>
                                <select id="ose_user_class_selection" class="ose_user_dropdowns" name="character_class_dropdown">
                                    <option value="Random">Random</option>
                                    <option value="Acrobat">Acrobat</option>
                                    <option value="Thief">Thief</option>
                                    <option value="Assassin">Assassin</option>
                                    <option value="Cleric">Cleric</option>
                                    <option value="Druid">Druid</option>
                                    <option value="Fighter">Fighter</option>
                                    <option value="Bard">Bard</option>
                                    <option value="MagicUser">MagicUser</option>
                                    <option value="Barbarian">Barbarian</option>
                                    <option value="Illusionist">Illusionist</option>
                                    <option value="Necromancer">Necromancer</option>
                                    <option value="Knight">Knight</option>
                                    <option value="Ranger">Ranger</option>
                                    <option value="Paladin">Paladin</option>
                                </select>
                                <p class="ose_info_helper_text">Have a class in mind? Choose from the drop down menu.</p>
                            </div>
                        </div>                        
                    </div>
                    <div class="ose_input_section_inner flex">
                        <div>
                            <button class="ose_clear_user_content_button" onclick="oseClearUserInputs()">Clear</button>
                            <p class="ose_info_helper_text">Clear user content.</p>
                        </div>
                        <div>
                            <button class="ose_make_character_button" onclick="oseBuildMyCharacter()">Make it so</button>
                            <p class="ose_info_helper_text">Click to generate character.</p>
                        </div>                                        
                    </div>                    
                </div>
            </div>
            <div class="ose_character_sheet">
                <div class="ose_page_one">
                    <div class="ose_page_left_side">
                        <div class="ose_character_header_info flex col">
                            <div class="flex">
                                <div class="ose_side_by_side_info_large_block flex">
                                    <div class="ose_side_by_side_start">PC</div>
                                    <div class="ose_side_by_side_end"><p id="ose_character_name" class="ose_displayed_info"></p></div>
                                </div>
                                <div class="ose_descriptions_block">
                                    <p>Character name</p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="ose_side_by_side_info_medium_block flex">
                                    <div class="ose_side_by_side_start">Race</div>
                                    <div class="ose_side_by_side_end"><p id="ose_character_race" class="ose_displayed_info"></p></div>
                                </div>
                                <div class="ose_side_by_side_info_small_block flex">
                                    <div class="ose_side_by_side_start">AL</div>
                                    <div class="ose_side_by_side_end"><p id="ose_character_alignment" class="ose_displayed_info"></p></div>
                                </div>
                                <div class="ose_descriptions_block">
                                    <p>Alignment: Law,<br/>Neutrality, Chaos</p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="ose_side_by_side_info_medium_block flex">
                                    <div class="ose_side_by_side_start">Class</div>
                                    <div class="ose_side_by_side_end"><p id="ose_character_class" class="ose_displayed_info"></p></div>
                                </div>
                                <div class="ose_side_by_side_info_small_block flex">
                                    <div class="ose_side_by_side_start">Level</div>
                                    <div class="ose_side_by_side_end"><p id="ose_character_level" class="ose_displayed_info"></p></div>
                                </div>
                                <div class="ose_descriptions_block">
                                    <p>Experience level<br/>current/ max</p>
                                </div>
                            </div>                    
                        </div>
                        <div class="ose_ability_saves_info">
                            <div class="flex">
                                <h2 class="ose_ability_saves_side_by_side"><span class="ose_larger_cap">A</span>BILITY <span class="ose_larger_cap">S</span>CORES</h2>
                                <h2 class="ose_ability_saves_side_by_side"><span class="ose_larger_cap">S</span>AVING <span class="ose_larger_cap">T</span>HROWS</h2>
                            </div>
                            <div class="ose_spacer_container flex col">
                                <div class="flex">
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">STR</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_str" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Melee att./damage,<br/>Open doors</p>
                                    </div>
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">D</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_d_save" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Death, poison</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">DEX</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_dex" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Missle attacks,<br/>AC, Initiative</p>
                                    </div>                            
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">W</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_w-save" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Magic wands</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">CON</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_con" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Hit points</p>
                                    </div>                            
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">P</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_p_save" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Paralysis,<br/>petrification</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">INT</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_int" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Languages, Literacy</p>
                                    </div>                            
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">B</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_b_save" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Breath attacks</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">WIS</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_wis" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Saves vs magic</p>
                                    </div>                            
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">S</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_s_save" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Spells, magic rods,<br/>magic staves</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">CHA</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_cha" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>Reactions,<br/>#Retainers, Loyalty</p>
                                    </div>
                                    <div class="ose_side_by_side_info_small_block flex">
                                        <div class="ose_side_by_side_start">±</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_wis_bonus_to_s_saves" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_descriptions_block">
                                        <p>WIS modifier to<br/>saves vs magic</p>
                                    </div>
                                </div>                              
                                <div class="flex">
                                    <p class="ose_ability_saves_side_by_side"><span class="bold">Ability check:</span> Roll under or equal on 1d20</p>
                                    <p class="ose_ability_saves_side_by_side"><span class="bold">Saving throw:</span> Roll over or equal on 1d20</p>
                                </div>                                                    
                            </div>                    
                        </div>
                        <div class="ose_combat_info">
                            <h2><span class="ose_larger_cap">C</span>OMBAT</h2>
                            <div class="ose_spacer_container flex col">
                                <div class="flex">
                                    <div class="ose_three_info_block flex">
                                        <div class="ose_three_info_start">HP</div>
                                        <div class="ose_three_info_mid"><p id="ose_character_current_hp" class="ose_displayed_info"></p></div>
                                        <p class="ose_three_info_description">Hit points</p>
                                    </div>
                                    <div class="ose_combat_section_stacked_spacer ose_spacer_container flex col">
                                        <div class="flex">
                                            <div class="ose_side_by_side_info_medium_block flex">
                                                <div class="ose_side_by_side_start">Max</div>
                                                <div class="ose_side_by_side_end"><p id="ose_character_max_hp" class="ose_displayed_info"></p></div>
                                            </div>
                                            <div class="ose_combat_section_description_spacer">
                                                <p>Maximum hit<br/>points</p>
                                            </div>                                
                                        </div>
                                        <div class="flex">
                                            <div class="ose_side_by_side_info_medium_block flex">
                                                <div class="ose_side_by_side_start">±</div>
                                                <div class="ose_side_by_side_end"><p id="ose_character_con_bonus_to_hp" class="ose_displayed_info"></p></div>
                                            </div>
                                            <div class="ose_combat_section_description_spacer">
                                                <p>Con modifier to<br/>hit points</p>
                                            </div>                                
                                        </div>
                                    </div>                            
                                </div>
                                <div class="flex">
                                    <div class="ose_three_info_block flex">
                                        <div class="ose_three_info_start">AC</div>
                                        <div class="ose_three_info_mid"><p id="ose_character_current_ac" class="ose_displayed_info"></p></div>
                                        <p class="ose_three_info_description">Armour Class</p>
                                    </div>
                                    <div class="ose_combat_section_stacked_spacer ose_spacer_container flex col">
                                        <div class="flex">
                                            <div class="ose_side_by_side_info_medium_block flex">
                                                <div class="ose_side_by_side_start">Un</div>
                                                <div class="ose_side_by_side_end"><p id="ose_character_unarmoured_ac" class="ose_displayed_info"></p></div>
                                            </div>
                                            <div class="ose_combat_section_description_spacer">
                                                <p>Unarmoured AC:<br/>10 + DEX modifier</p>
                                            </div>                                
                                        </div>
                                        <div class="flex">
                                            <div class="ose_side_by_side_info_medium_block flex">
                                                <div class="ose_side_by_side_start">±</div>
                                                <div class="ose_side_by_side_end"><p id="ose_character_dex_bonus_to_ac" class="ose_displayed_info"></p></div>
                                            </div>
                                            <div class="ose_combat_section_description_spacer">
                                                <p>DEX modifier to<br/>Armour Class</p>
                                            </div>                                
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="ose_three_info_block flex">
                                        <div class="ose_three_info_start">Att</div>
                                        <div class="ose_three_info_mid"><p id="ose_character_attack_bonus" class="ose_displayed_info"></p></div>
                                        <p class="ose_three_info_description">Attack bonus</p>
                                    </div>
                                    <div class="ose_combat_section_stacked_spacer ose_spacer_container flex col">
                                        <div class="flex">
                                            <div class="ose_side_by_side_info_medium_block flex">
                                                <div class="ose_side_by_side_start">Mel</div>
                                                <div class="ose_side_by_side_end"><p id="ose_character_melee_attack_bonus" class="ose_displayed_info"></p></div>
                                            </div>
                                            <div class="ose_combat_section_description_spacer">
                                                <p>STR modifier to<br/>melee att./damage</p>
                                            </div>                                
                                        </div>
                                        <div class="flex">
                                            <div class="ose_side_by_side_info_medium_block flex">
                                                <div class="ose_side_by_side_start">Mis</div>
                                                <div class="ose_side_by_side_end"><p id="ose_character_missile_attack_bonus" class="ose_displayed_info"></p></div>
                                            </div>
                                            <div class="ose_combat_section_description_spacer">
                                                <p>DEX modifier to<br/>missile attacks</p>
                                            </div>                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ose_abilities_skills_weapons_info">
                            <h2><span class="ose_larger_cap">A</span>BILITIES, <span class="ose_larger_cap">S</span>KILLS, <span class="ose_larger_cap">W</span>EAPONS</h2>
                            <div class="ose_general_info_block ose_block_large_height_spacer"><p id="ose_character_ability_skills_weapons"></p></div>
                        </div>
                    </div>
                    <div class="ose_page_right_side">
                        <img src="images/OSE/oseLogoWebp.webp" alt="oseLogo" class="ose_logo"/>
                        <div class="flex col ose_spacer_container">
                            <div class="ose_character_portait ose_block_medium_height_spacer"><img id="image_display" alt=""/></div>
                            <p>Character portrait, symbol, description</p>
                        </div>
                        <div class="ose_encounters_info">
                            <h2><span class="ose_larger_cap">E</span>NCOUNTERS</h2>
                            <div class="flex col ose_spacer_container">
                                <div class="flex">
                                    <div class="ose_side_by_side_info_medium_block flex">
                                        <div class="ose_side_by_side_start">Init</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_initiative" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>DEX modifier to<br/>initiative (optional)</p>
                                    </div>                                
                                </div>
                                <div class="flex">
                                    <div class="ose_side_by_side_info_medium_block flex">
                                        <div class="ose_side_by_side_start">±</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_cha_bonus_to_reactions" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>CHA modifier to<br/>reaction rolls</p>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        <div class="ose_exploration_info">
                            <h2><span class="ose_larger_cap">E</span>XPLORATION</h2>
                            <div class="flex col ose_spacer_container">
                                <div class="flex">
                                    <div class="ose_three_info_block flex">
                                        <div class="ose_three_info_start">LD</div>
                                        <div class="ose_three_info_mid"><p id="ose_character_listen_door_explore" class="ose_displayed_info"></p></div>
                                        <p class="ose_three_info_description">-in-6</p>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>Listen at door<br/>(1-in-6 or by class)</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="ose_three_info_block flex">
                                        <div class="ose_three_info_start">OD</div>
                                        <div class="ose_three_info_mid"><p id="ose_character_open_door_explore" class="ose_displayed_info"></p></div>
                                        <p class="ose_three_info_description">-in-6</p>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>Open stuck door<br/>(based on STR)</p>
                                    </div>
                                </div> 
                                <div class="flex">
                                    <div class="ose_three_info_block flex">
                                        <div class="ose_three_info_start">SD</div>
                                        <div class="ose_three_info_mid"><p id="ose_character_secret_door_explore" class="ose_displayed_info"></p></div>
                                        <p class="ose_three_info_description">-in-6</p>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>Find secret door<br/>(1-in-6 or by class)</p>
                                    </div>
                                </div> 
                                <div class="flex">
                                    <div class="ose_three_info_block flex">
                                        <div class="ose_three_info_start">FT</div>
                                        <div class="ose_three_info_mid"><p id="ose_character_find_trap_explore" class="ose_displayed_info"></p></div>
                                        <p class="ose_three_info_description">-in-6</p>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>Find room trap<br/>(1-in-6 or by class)</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="ose_movement_info">
                            <div class="flex">
                                <h2 class="ose_combat_section_stacked_spacer"><span class="ose_larger_cap">M</span>OVEMENT</h2>
                                <p class="ose_side_title_info ose_combat_section_stacked_spacer">Base mv. rate=120,<br/>unless encumbered</p>
                            </div>                        
                            <div class="flex col ose_spacer_container">
                                <div class="flex">
                                    <div class="ose_side_by_side_info_medium_block flex">
                                        <div class="ose_side_by_side_start">Ov</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_overland_movement" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>Overland: ½ base<br/>mv. rate (miles/day)</p>
                                    </div>                                
                                </div>
                                <div class="flex">
                                    <div class="ose_side_by_side_info_medium_block flex">
                                        <div class="ose_side_by_side_start">Ex</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_exploration_movement" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>Exploration base<br/>mv. rate (feet/turn)</p>
                                    </div>                                
                                </div>
                                <div class="flex">
                                    <div class="ose_side_by_side_info_medium_block flex">
                                        <div class="ose_side_by_side_start">En</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_encounter_movement" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>Encounter: ½ base<br/>mv. rate (feet/round)</p>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        <div class="ose_languages_info">
                            <div class="flex">
                                <h2 class="ose_combat_section_stacked_spacer"><span class="ose_larger_cap">L</span>ANGUAGES</h2>
                                <p class="ose_side_title_info ose_combat_section_stacked_spacer">By class, extra<br/>langs. if int 13+</p>
                            </div>
                            <div class="ose_general_info_block ose_block_small_height_spacer"><p id="ose_character_languages"></p></div>
                        </div>
                    </div>
                </div>
                <div class="ose_page_two">
                    <div class="ose_page_left_side">
                        <div class="ose_equipment_info">
                            <h2><span class="ose_larger_cap">E</span>QUIPMENT</h2>
                            <div class="ose_general_info_block ose_block_large_height_spacer"><p id="ose_character_equipment"></p></div>
                        </div>
                        <div class="ose_magic_items_info">
                            <h2><span class="ose_larger_cap">M</span>AGIC <span class="ose_larger_cap">I</span>TEMS</h2>
                            <div class="ose_general_info_block ose_block_medium_height_spacer"></div>
                        </div>
                        <div class="ose_other_notes_info">
                            <div class="flex">
                                <h2 class="ose_combat_section_stacked_spacer"><span class="ose_larger_cap">O</span>THER <span class="ose_larger_cap">N</span>OTES</h2>
                                <p class="ose_side_title_info ose_combat_section_stacked_spacer ose_right_side_align">Spells, mounts, retainers,<br/>areas explored, clues</p>
                            </div>
                            <div class="flex col ose_spacer_container">
                                <div class="ose_general_info_block ose_block_medium_height_spacer"><p id="ose_character_spells_mounts_other"></p></div>
                                <div class="flex">
                                    <div class="ose_three_info_block flex">
                                        <div class="ose_three_info_start">XP</div>
                                        <div class="ose_three_info_mid"><p id="ose_character_current_exp" class="ose_displayed_info"></p></div>
                                        <p class="ose_three_info_description">Experience points</p>
                                    </div>
                                    <div class="ose_combat_section_stacked_spacer ose_spacer_container flex col">
                                        <div class="flex">
                                            <div class="ose_side_by_side_info_medium_block flex">
                                                <div class="ose_side_by_side_start">Next</div>
                                                <div class="ose_side_by_side_end"><p id="ose_character_next_level_exp_needed" class="ose_displayed_info"></p></div>
                                            </div>
                                            <div class="ose_combat_section_description_spacer">
                                                <p>Experience hit<br/>for next level</p>
                                            </div>                                
                                        </div>
                                        <div class="flex">
                                            <div class="ose_side_by_side_info_medium_block flex">
                                                <div class="ose_side_by_side_start">%</div>
                                                <div class="ose_side_by_side_end"><p id="ose_character_prime_stat_bonus_to_exp" class="ose_displayed_info"></p></div>
                                            </div>
                                            <div class="ose_combat_section_description_spacer">
                                                <p>Prime requisite<br/>Modifier to XP</p>
                                            </div>                                
                                        </div>
                                    </div>                        
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <div class="ose_page_right_side">
                        <div class="ose_weapons_armor_info">
                            <h2><span class="ose_larger_cap">W</span>EAPONS <span class="ose_larger_cap">&</span> <span class="ose_larger_cap">A</span>RMOUR</h2>
                            <div class="ose_general_info_block ose_block_large_height_spacer"><p id="ose_weapons_armor_display"></p></div>
                        </div>
                        <div class="ose_treasure_info">
                            <h2><span class="ose_larger_cap">T</span>REASURE</h2>
                            <div class="ose_general_info_block ose_block_medium_height_spacer"></div>
                        </div>
                        <div class="ose_coins_info">
                            <h2><span class="ose_larger_cap">C</span>OINS</h2>
                            <div class="flex col ose_spacer_container">
                                <div class="ose_side_by_side_info_full_block flex">
                                    <div class="ose_side_by_side_start">PP</div>
                                    <div class="ose_side_by_side_end"><p id="ose_character_platinum_coins" class="ose_displayed_info"></p></div>
                                </div>
                                <div class="ose_side_by_side_info_full_block flex">
                                    <div class="ose_side_by_side_start">GP</div>
                                    <div class="ose_side_by_side_end"><p id="ose_character_gold_coins" class="ose_displayed_info"></p></div>
                                </div>
                                <div class="ose_side_by_side_info_full_block flex">
                                    <div class="ose_side_by_side_start">EP</div>
                                    <div class="ose_side_by_side_end"><p id="ose_character_electrum_coins" class="ose_displayed_info"></p></div>
                                </div>
                                <div class="ose_side_by_side_info_full_block flex">
                                    <div class="ose_side_by_side_start">SP</div>
                                    <div class="ose_side_by_side_end"><p id="ose_character_silver_coins" class="ose_displayed_info"></p></div>
                                </div>
                                <div class="ose_side_by_side_info_full_block flex">
                                    <div class="ose_side_by_side_start">CP</div>
                                    <div class="ose_side_by_side_end"><p id="ose_character_copper_coins" class="ose_displayed_info"></p></div>
                                </div>
                            </div>
                        </div>
                        <div class="ose_encumbrance_info">
                            <div class="flex">
                                <h2 class="ose_combat_section_stacked_spacer"><span class="ose_larger_cap">E</span>NCUMBRANCE</h2>
                                <p class="ose_side_title_info ose_combat_section_stacked_spacer ose_right_side_align">(Optional rule)</p>
                            </div>
                            <div class="flex col ose_spacer_container">
                                <div class="flex">
                                    <div class="ose_side_by_side_info_medium_block flex">
                                        <div class="ose_side_by_side_start">TR</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_treasure_coin_weight" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>Weight of treasure<br/>& coins</p>
                                    </div>                                
                                </div>
                                <div class="flex">
                                    <div class="ose_side_by_side_info_medium_block flex">
                                        <div class="ose_side_by_side_start">EQ</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_weapons_armour_weight" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>Weight of weapons,<br/>armour & gear</p>
                                    </div>                                
                                </div>
                                <div class="flex">
                                    <div class="ose_side_by_side_info_medium_block flex">
                                        <div class="ose_side_by_side_start">+</div>
                                        <div class="ose_side_by_side_end"><p id="ose_character_total_carried_weight" class="ose_displayed_info"></p></div>
                                    </div>
                                    <div class="ose_combat_section_description_spacer">
                                        <p>Total weight carried<br/>(max=1600cn)</p>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );        
};

export default OseCharacterPage;