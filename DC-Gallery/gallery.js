$(document).ready(function() {
    var profilesData = [];
    function renderProfiles(profilesArray) {
        var finalHTML = '';

        profilesArray.forEach(function(currentProfile) {
            finalHTML += '<tr class="profile>';
            finalHTML += '<td>' + currentProfile.fullName + '</td>';
            finalHTML += '<td>' + currentProfile.missionStatement + '</td>';
            finalHTML += '<td><a href="' + currentProfile.linkedinUrl + '"><button type="button" class="btn btn-primary:>LinkedeIn</button></a></td>';
            finalHTML += '</tr>';
        });
        return finalHTML;
    }
    $.ajax(
        {
            url: "https://s3.amazonaws.com/dc-profiles/Students.json",
            method: "GET", 
            success: function(result) {
                var profilesData = JSON.parse(result);
                var profilesHTML = renderProfiles(profilesData);
                $('.profiles-container').html(profileHTML);
            }
        });

});