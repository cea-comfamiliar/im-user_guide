## loginWithGoogle

Esta custom function permite que el inicio de sesión se realice a través de una cuenta de google

```dart title="loginWithGoogle.dart"
// Automatic FlutterFlow imports
import '/backend/schema/structs/index.dart';
import '/backend/supabase/supabase.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/custom_code/actions/index.dart'; // Imports other custom actions
import '/flutter_flow/custom_functions.dart'; // Imports custom functions
import 'package:flutter/material.dart';
// Begin custom action code
// DO NOT REMOVE OR MODIFY THE CODE ABOVE!


import 'package:supabase_flutter/supabase_flutter.dart';


final supabase = Supabase.instance.client;


Future<bool> loginWithGoogle() async {
  // Sign up user with Google
  return await supabase.auth.signInWithOAuth(Provider.google);
}
```


## getUserInfo

Esta custom function permite obtener el nombre, correo e imagen de los usuarios que se loguean en la aplicación

```dart title="getUserInfo.dart"
// Automatic FlutterFlow imports
import '/backend/schema/structs/index.dart';
import '/backend/supabase/supabase.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/custom_code/actions/index.dart'; // Imports other custom actions
import '/flutter_flow/custom_functions.dart'; // Imports custom functions
import 'package:flutter/material.dart';
// Begin custom action code
// DO NOT REMOVE OR MODIFY THE CODE ABOVE!


import '../../auth/supabase_auth/auth_util.dart';
import 'package:supabase_flutter/supabase_flutter.dart';


final supabase = Supabase.instance.client;


UserStruct getUserInfo() {
  UserStruct user = UserStruct(
      name: supabase.auth.currentUser?.userMetadata?['name']
          .toString()
          .split(' ')[0],
      fullName: supabase.auth.currentUser?.userMetadata?['full_name'],
      picture: supabase.auth.currentUser?.userMetadata?['picture'],
      avatarUrl: supabase.auth.currentUser?.userMetadata?['avatar_url']);


  return user;
}
```