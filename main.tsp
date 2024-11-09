import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

using TypeSpec.Http;
using TypeSpec.Rest;

@service({
  title: "Sausage Factory Backend",
})
@server("https://example.com/api", "Server endpoint")
@useAuth(Http.BearerAuth)
namespace SausageFactoryBackend;

/// ––––– ADMIN –––––

/// ––––– USER –––––

// ––– Warning
@route("user/warning")
namespace Warning {
  @post
  op postWarning(@body request: PostWarningRequest): {
    @statusCode statusCode: 200;
    @body response: ProcessWarning;
  } | ErrorUnauthorized;
}

model PostWarningRequest {
    warningTypeId: int32;
}

model ProcessWarning {
    id: int32;
    warningTypeId: int32;
    warningTypeName: string;
    subprocessId: int32;
    subprocessName: string;
    createdAt: string;
}

// ––– Warnings
@route("user/warnings")
namespace Warnings {
  @get
  op listWarnings(): {
    @statusCode statusCode: 200;
    @body response: ListWarningsResponse;
  };
  @delete
  op deleteWarnings(): {
    @statusCode statusCode: 200;
    @body response: StandardSuccess;
  };
}

model ListWarningsResponse {
    countOfWarnings: int32;
    warnings: ProcessWarning[];
}

// ––– User
@route("user/user")
namespace User {
  @post
  op postUser(@body request: PostUserRequest): {
    @statusCode statusCode: 200;
    @body response: PostUserResponse;
  } | ErrorUnauthorized;
}

model PostUserRequest {
    username: string;
    firstname?: string;
    lastname?: string;
    password: string;
    subprocessId: int32;
    roleId: int32;
    accessRights: AccessRights;
}

model AccessRights {
    isSuperAdmin?: boolean;
}

model PostUserResponse {
    userId: int32;
}

// ––– Authenticate
@route("user/authenticate")
namespace Authenticate {
  @post
  op authenticate(@body request: AuthenticateRequest): {
    @statusCode statusCode: 200;
    @body response: AuthenticateResponse;
  } | ErrorUnauthorized | ErrorNotFound;
}

model AuthenticateRequest {
    username: string;
    password: string;
}

model AuthenticateResponse {
    authToken: string;
    userId: int32;
    username: string;
    firstname: string;
    lastname: string;
    accessRights: AccessRights;
    subprocessId: int32;
}

// ––– DefaultResponses
model StandardSuccess {
    message: string;
}
model ErrorUnauthorized {
    @statusCode statusCode: 401;
    @body error: Error;
}
model ErrorNotFound {
    @statusCode statusCode: 404;
    @body error: Error;
}
model Error {
    error: string;
}
