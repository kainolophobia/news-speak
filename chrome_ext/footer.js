$(body').append('


<div id="footpanel">
	<ul id="mainpanel">    	
        <li><a href="http://adamwillia.ms/" class="home">Adam Williams <small>Home</small></a></li>
        <li id="alertpanel">
        	<a href="#" class="alerts">Alerts</a>
            <div style="height: auto;" class="subpanel">
            <h3><span> &#8211; </span>Notifications</h3>
            <ul style="height: auto;">
            	<li class="view"><a href="#">View All</a></li>
            	<li><a href="#" class="delete">X</a><p><a href="#">Antehabeo</a> abico quod duis odio tation luctus eu ad <a href="#">lobortis facilisis</a>.</p></li>
                <li><a href="#" class="delete">X</a><p><a href="#">Et voco </a> Duis vel quis at metuo obruo, turpis quadrum nostrud <a 
href="#">lobortis facilisis</a>.</p></li>
                <li><a href="#" class="delete">X</a><p><a href="#">Tego</a> nulla eum probo metuo nullus indoles os consequat commoveo os<a 
href="#">lobortis facilisis</a>.</p></li>
                <li><a href="#" class="delete">X</a><p><a href="#">Antehabeo</a> abico quod duis odio tation luctus eu ad <a href="#">lobortis facilisis</a>.</p></li>
                <li><a href="#" class="delete">X</a><p><a href="#">Nonummy</a> nulla eum probo metuo nullus indoles os consequat commoveo <a href="#">lobortis
 facilisis</a>.</p></li>
                <li><a href="#" class="delete">X</a><p><a href="#">Tego</a> minim autem aptent et jumentum metuo uxor nibh euismod si <a href="#">lobortis
 facilisis</a>.</p></li>
                <li><a href="#" class="delete">X</a><p><a href="#">Antehabeo</a> abico quod duis odio tation luctus eu ad <a href="#">lobortis facilisis</a>.</p></li>
            </ul>
            </div>
        </li>
        <li id="chatpanel">
        	<a href="#" class="chat">
			<div id="chatMainFrLi" >
									 Appear Offline
							</div>
			</a>
            <div style="height: 515px;" class="subpanel">
            <h3><span> &#8211; </span>Friends Online</h3>

            <ul style="height: 490px;">
			<li>
				<div class="chatsettings">
				<table class="barsetingtable" align="right"><tr>
					<td align="center" width="18"><div onclick="showSetMenue();"><img src="images/setting.jpg" border="0" height="13"/></div></td>
					<td width="60" align="center"><div onclick="showSetMenue();">Settings</div></td>
				</tr></table>
				</div>
				<div class="settingmenue" id="settingmenue">
					<table>
						<tr><td height="20"><input type="radio" id="apearON" name="apearStatus" checked='checked' onclick="changeChatState(0)"/>
						</td><td><div onclick="changeChatState(0)" class="cursorOver">Appear Offline</div></td></tr>
						<tr><td  height="20"><input type="radio" id="apearOFF" name="apearStatus"  onclick="changeChatState(1)"/>
						</td><td><div onclick="changeChatState(1)" class="cursorOver">Appear Online</div></td></tr>
					</table>
				</div>
			</li>
            	<li><span>Family Members</span></li>
									<!--
                <li><a href="#"><img src="userimages/chat_thumb.gif" alt=""> Your Friend</a></li>
                <li><span>Other Friends</span></li>
                <li><a href="#"><img src="userimages/chat_thumb.gif" alt=""> Your Friend</a></li>
				-->
            </ul>
            </div>
        </li>
        
        
	</ul>
</div>

');